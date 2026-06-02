SELECT
  p.promotion_type,
  p.promotion_name,
  c.company_name,
  b.brand_name,
  pc.name AS category_name,
  po.mat_identity,
  p2.product_name,
  p2.unit,
  po.online_price,
  pfp.sale_price,
  pfp.sale_percent,
  p.promotion_start,
  p.promotion_end,
  po.id AS product_option_id,
  (
    SELECT
      pi.url_image
    FROM
      "3nconnect".product_images pi
    WHERE
      (po.id = pi.product_id)
  ) AS url_image
FROM
  (
    (
      (
        (
          (
            (
              "3nconnect".promotions p
              JOIN "3nconnect".promotion_flashsale_products pfp ON ((p.id = pfp.promotion_id))
            )
            JOIN "3nconnect".product_options po ON ((pfp.product_option_id = po.id))
          )
          JOIN "3nconnect".products p2 ON ((po.product_id = p2.id))
        )
        JOIN "3nconnect".companies c ON ((p2.company_id = c.id))
      )
      JOIN "3nconnect".brands b ON ((p2.brand_id = b.id))
    )
    JOIN "3nconnect".product_categories pc ON ((p2.category_id = pc.id))
  )
WHERE
  (p.promotion_type = 'flash_sale' :: text);