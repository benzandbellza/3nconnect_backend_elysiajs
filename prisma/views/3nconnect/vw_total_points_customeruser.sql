SELECT
  sum(redeem_point) AS total_points,
  user_id
FROM
  reward_points
WHERE
  (expired_at >= NOW())
GROUP BY
  user_id;