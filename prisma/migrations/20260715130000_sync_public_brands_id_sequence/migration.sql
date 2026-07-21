SELECT setval(
  pg_get_serial_sequence('"public"."brands"', 'id'),
  COALESCE((SELECT MAX(id) FROM "public"."brands"), 1),
  (SELECT COUNT(*) > 0 FROM "public"."brands")
);
