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
    WHEN (clearance_table.sale_price IS NOT NULL) THEN 'clearance_sale' :: text
    WHEN (flash_sale_table.sale_price IS NOT NULL) THEN 'flash_sale' :: text
    WHEN (discount_table.sale_price IS NOT NULL) THEN 'discount' :: text
    ELSE '-' :: text
  END AS promotion_type,
  po.online_price,
  COALESCE(
    clearance_table.promotion_id,
    flash_sale_table.promotion_id,
    discount_table.promotion_id,
    NULL :: integer
  ) AS promotion_id,
  COALESCE(
    clearance_table.is_accept_overlapse_promotion,
    flash_sale_table.is_accept_overlapse_promotion,
    discount_table.is_accept_overlapse_promotion,
    NULL :: boolean
  ) AS is_accept_overlapse_promotion,
  COALESCE(
    clearance_table.sale_price,
    flash_sale_table.sale_price,
    discount_table.sale_price,
    NULL :: double precision
  ) AS sale_price,
  COALESCE(
    clearance_table.sale_percent,
    flash_sale_table.sale_percent,
    discount_table.sale_percent,
    NULL :: double precision
  ) AS sale_percent,
  p.is_online_active,
  p.is_pre_order,
  com.name AS company_name,
  com.id AS company_id,
  COALESCE(
    clearance_table.quantity_limit,
    flash_sale_table.quantity_limit,
    discount_table.quantity_limit,
    0
  ) AS quantity_limit,
  COALESCE(
    clearance_table.quantity_sold,
    flash_sale_table.quantity_sold,
    discount_table.quantity_sold,
    0
  ) AS quantity_sold
FROM
  (
    (
      (
        (
          (
            (
              product_options po
              JOIN products p ON (
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
                p_1.is_accept_overlapse_promotion,
                pfp.quantity_limit,
                pfp.quantity_sold
              FROM
                (
                  promotion p_1
                  JOIN promotion_flashsale_products pfp ON ((p_1.id = pfp.promotion_id))
                )
              WHERE
                (
                  (p_1.subtype = 'flash_sale' :: text)
                  AND (p_1.startdate <= NOW())
                  AND (p_1.enddate >= NOW())
                  AND (p_1.status = TRUE)
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
              p_1.is_accept_overlapse_promotion,
              NULL :: integer AS quantity_limit,
              0 AS quantity_sold
            FROM
              (
                promotion p_1
                JOIN promotion_discount_products pdp ON ((p_1.id = pdp.promotion_id))
              )
            WHERE
              (
                (p_1.subtype = 'discount' :: text)
                AND (p_1.startdate <= NOW())
                AND (p_1.enddate >= NOW())
                AND (p_1.status = TRUE)
              )
          ) discount_table ON ((po.id = discount_table.product_option_id))
        )
        LEFT JOIN (
          SELECT
            pcp.id,
            pcp.promotion_id,
            pcp.product_option_id,
            pcp.sale_price,
            pcp.sale_percent,
            p_1.is_accept_overlapse_promotion,
            (
              SELECT
                vps.qty_total
              FROM
                "3nconnect".vw_planetone_stocks vps
              WHERE
                (
                  (vps."Lot" = pcp.lot)
                  AND (vps.location_id = pcp.location_code)
                  AND (vps.invoice_id_mat_in = pcp.mr_code)
                )
            ) AS quantity_limit,
            0 AS quantity_sold
          FROM
            (
              promotion p_1
              JOIN promotion_clearance_products pcp ON ((p_1.id = pcp.promotion_id))
            )
          WHERE
            (
              (p_1.subtype = 'clearance_sale' :: text)
              AND (p_1.startdate <= NOW())
              AND (p_1.enddate >= NOW())
              AND (p_1.status = TRUE)
            )
        ) clearance_table ON ((po.id = clearance_table.product_option_id))
      )
      LEFT JOIN product_images t ON (
        (
          (p.id = t.product_id)
          AND (t.is_show = TRUE)
        )
      )
    )
    JOIN companies com ON ((p.company_id = com.id))
  );