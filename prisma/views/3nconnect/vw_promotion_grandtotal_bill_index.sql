SELECT
  p.url_image AS url_promotion_image,
  p.id AS promotion_id,
  p.promotion_name,
  p.promotion_description,
  p.promotion_start,
  p.promotion_end,
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
            "3nconnect".promotions p
            JOIN "3nconnect".promotion_bundle_deal_grand_total_tiers pbdgtt ON ((p.id = pbdgtt.promotion_id))
          )
          JOIN "3nconnect".promotion_bundle_deal_grand_total_free_products pbdgtfp ON (
            (
              pbdgtfp.bundle_deal_grand_total_tiers_id = pbdgtt.id
            )
          )
        )
        JOIN "3nconnect".product_options po ON ((pbdgtfp.product_option_id = po.id))
      )
      JOIN "3nconnect".products p2 ON (
        (
          (po.product_id = p2.id)
          AND (p2.is_active = TRUE)
          AND (p2.is_pre_order = false)
          AND (p2.is_online_active = TRUE)
        )
      )
    )
    LEFT JOIN "3nconnect".product_images pi ON (
      (
        (p2.id = pi.product_id)
        AND (pi.is_show = TRUE)
      )
    )
  )
WHERE
  (
    (p.promotion_start <= NOW())
    AND (p.promotion_end >= NOW())
    AND (p.is_active = TRUE)
  );