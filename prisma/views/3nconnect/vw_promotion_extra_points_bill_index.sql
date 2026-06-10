SELECT
  p.url_image AS url_promotion_image,
  p.id AS promotion_id,
  p.promotion_name,
  p.promotion_description,
  p.promotion_start,
  p.promotion_end,
  p.is_accept_overlapse_promotion,
  peptr.level_no,
  peptr.min_amount,
  peptr.points_multiplier
FROM
  (
    "3nconnect".promotions p
    JOIN "3nconnect".promotion_extra_points_tier_rules peptr ON ((p.id = peptr.promotion_id))
  )
WHERE
  (
    (p.promotion_start <= NOW())
    AND (p.promotion_end >= NOW())
    AND (p.is_active = TRUE)
  );