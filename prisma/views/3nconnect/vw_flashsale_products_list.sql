SELECT
  p.type AS promotion_type,
  p.proname AS promotion_name,
  c.name AS company_name,
  b.brand_name,
  pc.name AS category_name,
  po.mat_identity,
  CASE
    WHEN (po.option_name IS NULL) THEN p2.product_name
    ELSE concat(p2.product_name, ' ', po.option_name)
  END AS product_name,
  p2.unit,
  po.online_price,
  pfp.sale_price,
  pfp.sale_percent,
  p.startdate AS promotion_start,
  p.enddate AS promotion_end,
  po.id AS product_option_id,
  (
    SELECT
      pi.url_image
    FROM
      product_images pi
    WHERE
      (pi.product_id = p2.id)
    LIMIT
      1
  ) AS url_image,
  p.id AS promotion_id,
  CASE
    WHEN (
      (p.startdate <= NOW())
      AND (p.enddate >= NOW())
    ) THEN TRUE
    ELSE false
  END AS is_promotion_active
FROM
  (
    (
      (
        (
          (
            (
              promotion p
              JOIN promotion_flashsale_products pfp ON ((p.id = pfp.promotion_id))
            )
            JOIN product_options po ON ((pfp.product_option_id = po.id))
          )
          JOIN products p2 ON ((po.product_id = p2.id))
        )
        JOIN companies c ON ((p2.company_id = c.id))
      )
      JOIN brands b ON ((p2.brand_id = b.id))
    )
    JOIN product_categories pc ON ((p2.category_id = pc.id))
  )
WHERE
  (p.type = 'flash_sale' :: text);