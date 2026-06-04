SELECT
  c.company_name,
  b.brand_name,
  pc.name AS category_name,
  po.mat_identity,
  CASE
    WHEN (po.option_name IS NULL) THEN p2.product_name
    ELSE concat(p2.product_name, ' ', po.option_name)
  END AS product_name,
  p2.unit,
  po.online_price,
  po.id AS product_option_id,
  (
    SELECT
      pi.url_image
    FROM
      "3nconnect".product_images pi
    WHERE
      (pi.product_id = p2.id)
    LIMIT
      1
  ) AS url_image
FROM
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
WHERE
  (
    (p2.is_online_active = TRUE)
    AND (p2.is_active = TRUE)
  );