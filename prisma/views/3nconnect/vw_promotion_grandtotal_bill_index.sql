SELECT
  p.url_image AS url_promotion_image,
  p.id AS promotion_id,
  p.proname AS promotion_name,
  p.description AS promotion_description,
  p.startdate AS promotion_start,
  p.enddate AS promotion_end,
  pbdgtfp.bundle_deal_grand_total_tiers_id,
  pbdgtt.level_no,
  pbdgtt.minimum_grand_total,
  p.is_accept_overlapse_promotion,
  pi.url_image,
  p2.id AS product_id,
  p2.product_name,
  po.id AS product_option_id,
  po.option_name,
  po.online_price,
  pbdgtfp.free_quantity,
  p.customer_tiers
FROM
  (
    (
      (
        (
          (
            promotion p
            JOIN promotion_bundle_deal_grand_total_tiers pbdgtt ON ((p.id = pbdgtt.promotion_id))
          )
          JOIN promotion_bundle_deal_grand_total_free_products pbdgtfp ON (
            (
              pbdgtfp.bundle_deal_grand_total_tiers_id = pbdgtt.id
            )
          )
        )
        JOIN product_options po ON ((pbdgtfp.product_option_id = po.id))
      )
      JOIN products p2 ON (
        (
          (po.product_id = p2.id)
          AND (p2.is_active = TRUE)
          AND (p2.is_pre_order = false)
          AND (p2.is_online_active = TRUE)
        )
      )
    )
    LEFT JOIN product_images pi ON (
      (
        (p2.id = pi.product_id)
        AND (pi.is_show = TRUE)
      )
    )
  )
WHERE
  (
    (p.startdate <= NOW())
    AND (p.enddate >= NOW())
    AND (p.status = TRUE)
  );