SELECT
  e.id AS event_id,
  e.event_image,
  ec.event_cate_name,
  e.event_name,
  e.event_detail,
  e.register_date,
  e.preregister_date,
  e.event_startdate,
  e.event_enddate,
  e.location_name,
  e.tier_register,
  e.tier_preregister,
  e.ref_url,
  e.is_active
FROM
  (
    "3nconnect".events e
    LEFT JOIN "3nconnect".event_categories ec ON ((e.event_category_id = ec.id))
  );