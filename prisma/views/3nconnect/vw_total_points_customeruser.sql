SELECT
  sum(redeem_point) AS total_points,
  user_id
FROM
  reward_points
WHERE
  (redeem_exp >= NOW())
GROUP BY
  user_id;