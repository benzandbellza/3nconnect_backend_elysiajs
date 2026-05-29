SELECT
  cu.id AS user_id,
  cu.authid AS auth_id,
  cu.member_id AS member_no,
  cu.gender,
  cu.prefix AS prefix_th,
  cu.namesurname AS fullname_th,
  cu.email,
  cu.tel AS phone_no,
  cu.birthday,
  cu.pdpa_accepted,
  cu.pdpa_version,
  ct.tier,
  ct.start_at AS tier_start_at,
  ct.expired_at AS tier_expired_at
FROM
  (
    customeruser cu
    LEFT JOIN customer_tier ct ON ((cu.id = ct.user_id))
  );