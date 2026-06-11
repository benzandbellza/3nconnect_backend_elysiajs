SELECT
  p.url_image AS url_promotion_image,
  p.id AS promotion_id,
  p.promotion_name,
  p.promotion_description,
  p.promotion_start,
  p.promotion_end,
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
          "3nconnect".promotions p
          JOIN "3nconnect".promotion_extra_points_products pepp ON ((p.id = pepp.promotion_id))
        )
        JOIN "3nconnect".product_options po ON ((pepp.product_option_id = po.id))
      )
      JOIN "3nconnect".products p2 ON (
        (
          (po.product_id = p2.id)
          AND (p2.is_active = TRUE)
        )
      )
    )
    LEFT JOIN "3nconnect".product_images t ON (
      (
        (p2.id = t.product_id)
        AND (t.is_show = TRUE)
      )
    )
  )
WHERE
  (
    (p.promotion_start <= NOW())
    AND (p.promotion_end >= NOW())
    AND (p.is_active = TRUE)
  );