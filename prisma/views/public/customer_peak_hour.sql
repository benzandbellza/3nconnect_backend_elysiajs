WITH hourly AS (
  SELECT
    cu.id AS customer_id,
    (
      EXTRACT(
        HOUR
        FROM
          (ual.logged_at AT TIME ZONE 'Asia/Bangkok' :: text)
      )
    ) :: integer AS hour_of_day,
    count(*) AS activity_count
  FROM
    (
      customeruser cu
      JOIN user_activity_log ual ON ((cu.authid = ual.auth_id))
    )
  WHERE
    (ual.logged_at >= (NOW() - '90 days' :: INTERVAL))
  GROUP BY
    cu.id,
    (
      (
        EXTRACT(
          HOUR
          FROM
            (ual.logged_at AT TIME ZONE 'Asia/Bangkok' :: text)
        )
      ) :: integer
    )
),
ranked AS (
  SELECT
    hourly.customer_id,
    hourly.hour_of_day,
    hourly.activity_count,
    row_number() OVER (
      PARTITION BY hourly.customer_id
      ORDER BY
        hourly.activity_count DESC
    ) AS rn
  FROM
    hourly
)
SELECT
  customer_id,
  hour_of_day AS peak_hour
FROM
  ranked
WHERE
  (rn = 1);