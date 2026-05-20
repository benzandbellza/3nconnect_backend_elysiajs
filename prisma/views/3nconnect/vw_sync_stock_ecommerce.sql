SELECT
  (p.id) :: integer AS id,
  p.created_at,
  p."MM_RPTMAT_MATUnit ID" AS mat_unit_identity,
  product_ecommerce.mat_identity AS ecommerce_mat_identity,
  p."MM_RPTMAT_MAT ID" AS mat_identity,
  p."MM_RPTMAT_MAT Name" AS mat_name,
  p."MM_RPTMAT_MAT Category" AS mat_category_text,
  p."MM_RPTMAT_Status" AS mat_status,
  p."MM_RPTMAT_Qty-Unit" AS mat_qty_unit,
  p."MM_RPTMAT_AGQty-Unit" AS mat_agqty_unit,
  com.id AS company_id,
  com.company_name,
  product_ecommerce.online_price,
  product_ecommerce.option_name AS sale_option_name,
  CASE
    WHEN (product_ecommerce.mat_identity IS NOT NULL) THEN TRUE
    ELSE false
  END AS is_online_status
FROM
  (
    (
      "Productdata" p
      LEFT JOIN (
        SELECT
          tp.company_id,
          tpo.mat_identity,
          tpo.online_price,
          tpo.option_name
        FROM
          (
            "3nconnect".products tp
            JOIN "3nconnect".product_options tpo ON ((tp.id = tpo.product_id))
          )
      ) product_ecommerce ON (
        (
          (
            (
              product_ecommerce.mat_identity ~~ (p."MM_RPTMAT_MATUnit ID" || '%' :: text)
            )
            OR (
              product_ecommerce.mat_identity ~~ (p."MM_RPTMAT_MAT ID" || '%' :: text)
            )
          )
          AND (product_ecommerce.company_id = p.company_id)
        )
      )
    )
    JOIN "3nconnect".companies com ON ((p.company_id = com.id))
  );