SELECT
  p.id AS product_id,
  po.id AS product_option_id,
  p.product_name,
  po.option_name,
  ppm.credit_terms,
  ppm.mobile_banking,
  ppm.qr_code_promptpay,
  ppm.visa_card
FROM
  (
    (
      "3nconnect".products p
      JOIN "3nconnect".product_options po ON ((p.id = po.product_id))
    )
    JOIN "3nconnect".product_payment_method ppm ON ((p.id = ppm.product_id))
  )
WHERE
  (p.is_active = TRUE);