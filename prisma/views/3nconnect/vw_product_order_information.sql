SELECT
  ig.docid AS im_id,
  ig.sale_price,
  ig.qty,
  vp.product_name,
  vp.option_name,
  vp.unit,
  vp.url_image,
  vp.online_price,
  ig.product_option_id
FROM
  (
    im_goods ig
    JOIN "3nconnect".vw_products vp ON ((ig.product_option_id = vp.product_option_id))
  );