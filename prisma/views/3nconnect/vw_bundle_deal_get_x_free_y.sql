WITH temp_products_option AS (
  SELECT
    po.id AS product_option_id,
    c.company_name,
    b.brand_name,
    pc.name AS product_category_name,
    p_1.product_name,
    p_1.unit AS product_unit,
    po.mat_identity
  FROM
    (
      (
        (
          (
            "3nconnect".product_options po
            JOIN "3nconnect".products p_1 ON ((po.product_id = p_1.id))
          )
          JOIN "3nconnect".companies c ON ((p_1.company_id = c.id))
        )
        JOIN "3nconnect".brands b ON ((p_1.brand_id = b.id))
      )
      JOIN "3nconnect".product_categories pc ON ((p_1.category_id = pc.id))
    )
)
SELECT
  p.promotion_type,
  p.promotion_name,
  get_option_products_table.company_name AS get_company_name,
  get_option_products_table.brand_name AS get_brand_name,
  get_option_products_table.product_category_name AS get_product_category,
  get_option_products_table.mat_identity AS get_mat_identity,
  get_option_products_table.product_name AS get_product_name,
  get_option_products_table.product_unit AS get_product_unit,
  pbdgp.get_quantity,
  free_option_products_table.company_name AS free_company_name,
  free_option_products_table.brand_name AS free_brand_name,
  free_option_products_table.product_category_name AS free_product_category,
  free_option_products_table.mat_identity AS free_mat_identity,
  free_option_products_table.product_name AS free_product_name,
  free_option_products_table.product_unit AS free_product_unit,
  pbdfp.free_quantity,
  p.promotion_start,
  p.promotion_end
FROM
  (
    (
      (
        (
          "3nconnect".promotions p
          JOIN "3nconnect".promotion_bundle_deal_get_products pbdgp ON ((p.id = pbdgp.promotion_id))
        )
        JOIN "3nconnect".promotion_bundle_deal_free_products pbdfp ON ((pbdgp.id = pbdfp.bundle_deal_get_id))
      )
      JOIN temp_products_option get_option_products_table ON (
        (
          get_option_products_table.product_option_id = pbdgp.product_option_id
        )
      )
    )
    JOIN temp_products_option free_option_products_table ON (
      (
        free_option_products_table.product_option_id = pbdfp.product_option_id
      )
    )
  )
WHERE
  (
    p.promotion_type = 'bundle_deal_get_x_free_y' :: text
  );