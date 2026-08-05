SELECT
  i.order_uuid,
  i.docid AS order_no,
  i.updated_at AS order_updated_at,
  (
    SELECT
      t.url_image
    FROM
      product_images t
    WHERE
      (
        (t.is_show IS TRUE)
        AND (t.product_id = p.id)
      )
  ) AS url_image,
  p.product_name,
  po.option_name,
  ig.qty AS bought_qty,
  pr.comment AS review_comment,
  i.is_review_completed,
  pr.status AS admin_review_status,
  ig.sale_price,
  po.id AS product_option_id,
  pr.rating,
  pr.id AS product_review_id,
  p.id AS product_id,
  pr.created_at,
  pr.admin_reply AS admin_quote
FROM
  (
    (
      (
        (
          "IM" i
          JOIN im_goods ig ON ((i.id = ig.docid))
        )
        JOIN product_options po ON ((ig.product_option_id = po.id))
      )
      JOIN products p ON ((po.product_id = p.id))
    )
    LEFT JOIN product_review pr ON (
      (
        (pr.order_uuid = i.order_uuid)
        AND (po.id = pr.product_option_id)
      )
    )
  );