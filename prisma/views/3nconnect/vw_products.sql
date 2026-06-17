SELECT
  c.company_name,
  b.brand_name,
  pc.name AS category_name,
  po.mat_identity,
  p2.product_name,
  po.option_name,
  p2.unit,
  po.online_price,
  po.id AS product_option_id,
  pi.url_image,
  p2.is_online_active,
  p2.is_pre_order,
  p2.is_active
FROM
  (
    (
      (
        (
          (
            "3nconnect".products p2
            JOIN "3nconnect".product_options po ON ((p2.id = po.product_id))
          )
          JOIN "3nconnect".companies c ON ((p2.company_id = c.id))
        )
        JOIN "3nconnect".brands b ON ((p2.brand_id = b.id))
      )
      JOIN "3nconnect".product_categories pc ON ((p2.category_id = pc.id))
    )
    LEFT JOIN "3nconnect".product_images pi ON (
      (
        (pi.product_id = p2.id)
        AND (pi.is_show = TRUE)
      )
    )
  );