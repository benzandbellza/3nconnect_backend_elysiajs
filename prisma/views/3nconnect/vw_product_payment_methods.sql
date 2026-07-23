SELECT
  p.id AS product_id,
  po.id AS product_option_id,
  p.product_name,
  po.option_name,
  CASE
    WHEN (
      EXISTS (
        SELECT
          ppm.id
        FROM
          product_payment_method ppm
        WHERE
          (
            (ppm.payment_method_id = 7)
            AND (ppm.product_id = p.id)
          )
      )
    ) THEN TRUE
    ELSE false
  END AS credit_terms,
  CASE
    WHEN (
      EXISTS (
        SELECT
          ppm.id
        FROM
          product_payment_method ppm
        WHERE
          (
            (ppm.payment_method_id = 4)
            AND (ppm.product_id = p.id)
          )
      )
    ) THEN TRUE
    ELSE false
  END AS mobile_banking,
  CASE
    WHEN (
      EXISTS (
        SELECT
          ppm.id
        FROM
          product_payment_method ppm
        WHERE
          (
            (ppm.payment_method_id = 3)
            AND (ppm.product_id = p.id)
          )
      )
    ) THEN TRUE
    ELSE false
  END AS qr_code_promptpay,
  CASE
    WHEN (
      EXISTS (
        SELECT
          ppm.id
        FROM
          product_payment_method ppm
        WHERE
          (
            (ppm.payment_method_id = 1)
            AND (ppm.product_id = p.id)
          )
      )
    ) THEN TRUE
    ELSE false
  END AS visa_card
FROM
  (
    products p
    JOIN product_options po ON ((p.id = po.product_id))
  )
WHERE
  (p.is_active = TRUE);