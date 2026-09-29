SELECT
  obvu.order_billing_id,
  obvu.gift_voucher_code,
  c.gift_voucher_id,
  gv.url_image,
  gv.voucher_name,
  gv.gift_voucher_type,
  gvg.discount_type,
  gvg.min_purchase,
  gvg.max_discount,
  gvg.percent_discount
FROM
  (
    (
      (
        "3nconnect".order_billing_voucher_usage obvu
        JOIN customervoucher c ON (
          (
            (obvu.gift_voucher_code = c.voucherid)
            AND (c.used IS TRUE)
          )
        )
      )
      JOIN "3nconnect".gift_voucher gv ON ((c.gift_voucher_id = gv.id))
    )
    LEFT JOIN "3nconnect".gift_voucher_generic gvg ON ((gv.id = gvg.gift_voucher_id))
  );