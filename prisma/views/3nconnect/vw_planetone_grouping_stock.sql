SELECT
  "MATUnit",
  (sum(qty_total)) :: integer AS grandqty,
  company_name AS company
FROM
  "3nconnect".vw_planetone_stocks
GROUP BY
  "MATUnit",
  company_name;