SELECT
  p.subtype AS promotion_type,
  p.proname AS promotion_name,
  c.name AS company_name,
  b.brand_name,
  pc.name AS category_name,
  po.mat_identity,
  p2.product_name,
  p2.unit,
  po.online_price,
  pfp.sale_price,
  pfp.sale_percent,
  p.startdate AS promotion_start,
  p.enddate AS promotion_end
FROM
  (
    (
      (
        (
          (
            (
              promotion p
              JOIN promotion_discount_products pfp ON ((p.id = pfp.promotion_id))
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
  (p.subtype = 'discount' :: text);