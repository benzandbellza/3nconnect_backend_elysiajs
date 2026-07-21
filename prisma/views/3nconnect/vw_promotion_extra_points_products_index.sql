SELECT
  p.url_image AS url_promotion_image,
  p.id AS promotion_id,
  p.proname AS promotion_name,
  p.description AS promotion_description,
  p.startdate AS promotion_start,
  p.enddate AS promotion_end,
  p.is_accept_overlapse_promotion,
  p2.id AS product_id,
  p2.product_name,
  po.id AS product_option_id,
  po.option_name,
  pepp.points_multiplier,
  t.url_image,
  po.mat_identity
FROM
  (
    (
      (
        (
          promotion p
          JOIN promotion_extra_points_products pepp ON ((p.id = pepp.promotion_id))
        )
        JOIN product_options po ON ((pepp.product_option_id = po.id))
      )
      JOIN products p2 ON (
        (
          (po.product_id = p2.id)
          AND (p2.is_active = TRUE)
        )
      )
    )
    LEFT JOIN product_images t ON (
      (
        (p2.id = t.product_id)
        AND (t.is_show = TRUE)
      )
    )
  )
WHERE
  (
    (p.startdate <= NOW())
    AND (p.enddate >= NOW())
    AND (p.status = TRUE)
  );