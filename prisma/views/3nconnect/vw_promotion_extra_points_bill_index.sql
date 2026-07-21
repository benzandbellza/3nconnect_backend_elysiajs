SELECT
  p.url_image AS url_promotion_image,
  p.id AS promotion_id,
  p.proname AS promotion_name,
  p.description AS promotion_description,
  p.startdate AS promotion_start,
  p.enddate AS promotion_end,
  p.is_accept_overlapse_promotion,
  peptr.level_no,
  peptr.min_amount,
  peptr.points_multiplier
FROM
  (
    promotion p
    JOIN promotion_extra_points_tier_rules peptr ON ((p.id = peptr.promotion_id))
  )
WHERE
  (
    (p.startdate <= NOW())
    AND (p.enddate >= NOW())
    AND (p.status = TRUE)
  );