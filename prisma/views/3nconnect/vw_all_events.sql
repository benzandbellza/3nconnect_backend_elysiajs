SELECT
  e.id AS event_id,
  e.event_pic AS event_image,
  ec.event_cate_name,
  e.eventname AS event_name,
  e.event_detail,
  e.event_registerdate AS register_date,
  e.event_preregister AS preregister_date,
  e."eventStartDate" AS event_startdate,
  e."eventEndDate" AS event_enddate,
  e.location AS location_name,
  e.tierregister AS tier_register,
  e.tierpreregister AS tier_preregister,
  e.link AS ref_url,
  e.is_active
FROM
  (
    EVENTS e
    LEFT JOIN "3nconnect".event_categories ec ON ((e.event_category_id = ec.id))
  );