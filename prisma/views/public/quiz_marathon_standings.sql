WITH attempt_totals AS (
  SELECT
    quiz_attempts.event_id,
    quiz_attempts.customer_id,
    max(quiz_attempts.customer_name) AS customer_name,
    sum(quiz_attempts.correct_count) AS raw_score,
    sum(quiz_attempts.total_time_ms) AS raw_time_ms
  FROM
    quiz_attempts
  WHERE
    (quiz_attempts.status = 'done' :: text)
  GROUP BY
    quiz_attempts.event_id,
    quiz_attempts.customer_id
),
item_totals AS (
  SELECT
    quiz_marathon_item_log.event_id,
    quiz_marathon_item_log.target_customer_id AS customer_id,
    sum(quiz_marathon_item_log.score_delta) AS score_delta_sum,
    sum(quiz_marathon_item_log.time_delta_ms) AS time_delta_sum
  FROM
    quiz_marathon_item_log
  WHERE
    (quiz_marathon_item_log.blocked = false)
  GROUP BY
    quiz_marathon_item_log.event_id,
    quiz_marathon_item_log.target_customer_id
)
SELECT
  a.event_id,
  a.customer_id,
  a.customer_name,
  (
    a.raw_score + COALESCE(i.score_delta_sum, (0) :: bigint)
  ) AS total_score,
  (
    a.raw_time_ms + COALESCE(i.time_delta_sum, (0) :: numeric)
  ) AS total_time_ms
FROM
  (
    attempt_totals a
    LEFT JOIN item_totals i ON (
      (
        (i.event_id = a.event_id)
        AND (i.customer_id = a.customer_id)
      )
    )
  );