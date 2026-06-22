SELECT
  p.id AS product_id,
  po.id AS product_option_id,
  t.url_image,
  p.category_hierarchy,
  p.product_name,
  p.unit,
  po.mat_identity,
  po.option_name,
  CASE
    WHEN (flash_sale_table.sale_price IS NOT NULL) THEN 'flash_sale' :: text
    WHEN (discount_table.sale_price IS NOT NULL) THEN 'discount' :: text
    ELSE '-' :: text
  END AS promotion_type,
  po.online_price,
  COALESCE(
    flash_sale_table.promotion_id,
    discount_table.promotion_id,
    NULL :: integer
  ) AS promotion_id,
  COALESCE(
    flash_sale_table.is_accept_overlapse_promotion,
    discount_table.is_accept_overlapse_promotion,
    NULL :: boolean
  ) AS is_accept_overlapse_promotion,
  COALESCE(
    flash_sale_table.sale_price,
    discount_table.sale_price,
    NULL :: double precision
  ) AS sale_price,
  COALESCE(
    flash_sale_table.sale_percent,
    discount_table.sale_percent,
    NULL :: double precision
  ) AS sale_percent,
  p.is_online_active,
  p.is_pre_order,
  com.company_name
FROM
  (
    (
      (
        (
          (
            "3nconnect".product_options po
            JOIN "3nconnect".products p ON (
              (
                (po.product_id = p.id)
                AND (p.is_active = TRUE)
              )
            )
          )
          LEFT JOIN (
            SELECT
              pfp.id,
              pfp.promotion_id,
              pfp.product_option_id,
              pfp.sale_price,
              pfp.sale_percent,
              p_1.is_accept_overlapse_promotion
            FROM
              (
                "3nconnect".promotions p_1
                JOIN "3nconnect".promotion_flashsale_products pfp ON ((p_1.id = pfp.promotion_id))
              )
            WHERE
              (
                (p_1.promotion_type = 'flash_sale' :: text)
                AND (p_1.promotion_start <= NOW())
                AND (p_1.promotion_end >= NOW())
                AND (p_1.is_active = TRUE)
              )
          ) flash_sale_table ON ((po.id = flash_sale_table.product_option_id))
        )
        LEFT JOIN (
          SELECT
            pdp.id,
            pdp.promotion_id,
            pdp.product_option_id,
            pdp.sale_price,
            pdp.sale_percent,
            p_1.is_accept_overlapse_promotion
          FROM
            (
              "3nconnect".promotions p_1
              JOIN "3nconnect".promotion_discount_products pdp ON ((p_1.id = pdp.promotion_id))
            )
          WHERE
            (
              (p_1.promotion_type = 'discount' :: text)
              AND (p_1.promotion_start <= NOW())
              AND (p_1.promotion_end >= NOW())
              AND (p_1.is_active = TRUE)
            )
        ) discount_table ON ((po.id = discount_table.product_option_id))
      )
      LEFT JOIN "3nconnect".product_images t ON (
        (
          (p.id = t.product_id)
          AND (t.is_show = TRUE)
        )
      )
    )
    JOIN "3nconnect".companies com ON ((p.company_id = com.id))
  );