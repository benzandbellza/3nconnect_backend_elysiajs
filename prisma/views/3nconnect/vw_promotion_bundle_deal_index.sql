SELECT
  pro.id AS promotion_id,
  pro.promotion_name,
  pro.is_accept_overlapse_promotion,
  get_products_table.product_option_id AS get_product_option_id,
  get_products_table.product_name AS get_product_name,
  get_products_table.online_price AS get_product_price,
  get_products_table.get_quantity,
  get_products_table.unit AS get_product_unit,
  free_products_table.url_image AS free_url_image,
  free_products_table.product_option_id AS free_product_option_id,
  free_products_table.product_name,
  free_products_table.online_price AS free_product_price,
  free_products_table.free_quantity,
  free_products_table.unit AS free_product_unit
FROM
  (
    (
      "3nconnect".promotions pro
      JOIN (
        SELECT
          pbdgp.id AS bundle_deal_get_id,
          pbdgp.promotion_id,
          CASE
            WHEN (po.option_name IS NULL) THEN p.product_name
            ELSE concat(p.product_name, ' ', po.option_name)
          END AS product_name,
          p.unit,
          po.online_price,
          pbdgp.product_option_id,
          pbdgp.get_quantity
        FROM
          (
            (
              "3nconnect".products p
              JOIN "3nconnect".product_options po ON ((p.id = po.product_id))
            )
            JOIN "3nconnect".promotion_bundle_deal_get_products pbdgp ON ((po.id = pbdgp.product_option_id))
          )
      ) get_products_table ON ((pro.id = get_products_table.promotion_id))
    )
    JOIN (
      SELECT
        t.url_image,
        pbdfp.bundle_deal_get_id,
        CASE
          WHEN (po.option_name IS NULL) THEN p.product_name
          ELSE concat(p.product_name, ' ', po.option_name)
        END AS product_name,
        p.unit,
        po.online_price,
        pbdfp.product_option_id,
        pbdfp.free_quantity
      FROM
        (
          (
            (
              "3nconnect".products p
              JOIN "3nconnect".product_options po ON ((p.id = po.product_id))
            )
            JOIN "3nconnect".promotion_bundle_deal_free_products pbdfp ON ((po.id = pbdfp.product_option_id))
          )
          JOIN "3nconnect".product_images t ON (
            (
              (p.id = t.product_id)
              AND (t.is_show = TRUE)
            )
          )
        )
    ) free_products_table ON (
      (
        get_products_table.bundle_deal_get_id = free_products_table.bundle_deal_get_id
      )
    )
  )
WHERE
  (
    (pro.promotion_start <= NOW())
    AND (pro.promotion_end >= NOW())
    AND (pro.is_active = TRUE)
  );