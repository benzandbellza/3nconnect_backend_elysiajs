SELECT
  (sum(points)) :: integer AS total_points,
  user_id,
  expired_at
FROM
  reward_points
WHERE
  (expired_at >= NOW())
GROUP BY
  user_id,
  expired_at;