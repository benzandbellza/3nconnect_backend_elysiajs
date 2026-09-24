SELECT
  l.item_kind,
  l.spare_part_id,
  l.product_id,
  l.location_id,
  max(s.counted_at) AS last_counted_at
FROM
  (
    stock_count_lines l
    JOIN stock_count_sessions s ON ((s.id = l.session_id))
  )
WHERE
  (
    s.status <> 'ไม่อนุมัติ' :: text
  )
GROUP BY
  l.item_kind,
  l.spare_part_id,
  l.product_id,
  l.location_id;