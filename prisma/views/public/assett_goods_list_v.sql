SELECT
  g.id,
  g.name,
  g.sn_no,
  g.catalog_no,
  g.brand,
  g.type,
  g.created_at,
  g.companies_id,
  g.owner_customeruser_id,
  g.location_id,
  g.placement_assett_id,
  COALESCE(g.is_used, false) AS is_used,
  g.missing_at,
  CASE
    WHEN (g.missing_at IS NOT NULL) THEN 'missing' :: text
    WHEN (g.placement_assett_id IS NOT NULL) THEN 'placed' :: text
    WHEN (g.location_id IS NOT NULL) THEN 'stock' :: text
    ELSE 'none' :: text
  END AS where_state,
  c.last_doc_type,
  c.last_doc_status,
  c.last_doc_no,
  c.last_customer,
  c.last_customer_company,
  CASE
    WHEN (
      (g.missing_at IS NULL)
      AND (g.placement_assett_id IS NULL)
      AND (g.location_id IS NOT NULL)
    ) THEN c.location_name
    ELSE c.last_customer
  END AS holder_key,
  CASE
    WHEN (g.type = 'customer' :: text) THEN 'ของลูกค้า' :: text
    ELSE 'ของบริษัท (Asset)' :: text
  END AS type_label,
  COALESCE(
    (
      g.sn_no ~ '^\s*-?\d+(\.\d+)?[eE][+-]?\d+\s*$' :: text
    ),
    false
  ) AS sn_broken,
  c.search_text
FROM
  (
    assett_goods g
    LEFT JOIN assett_goods_list_cache c ON ((c.goods_id = g.id))
  );