SELECT
  p.id AS product_id,
  po.id AS product_option_id,
  p.product_name,
  p.unit,
  po.option_name,
  CASE
    WHEN (
      EXISTS (
        SELECT
          1
        FROM
          "3nconnect".promotion_flashsale_products pfp
        WHERE
          (pfp.product_option_id = po.id)
      )
    ) THEN CASE
      WHEN (
        EXISTS (
          SELECT
            1
          FROM
            (
              "3nconnect".promotion_flashsale_products pfp
              JOIN "3nconnect".promotions pro ON ((pfp.promotion_id = pro.id))
            )
          WHERE
            (
              (pro.promotion_start <= NOW())
              AND (pro.promotion_end >= NOW())
              AND (pro.is_active = TRUE)
            )
        )
      ) THEN 'flashsale' :: text
      ELSE '-' :: text
    END
    ELSE CASE
      WHEN (
        EXISTS (
          SELECT
            1
          FROM
            "3nconnect".promotion_discount_products pdp
          WHERE
            (pdp.product_option_id = po.id)
        )
      ) THEN CASE
        WHEN (
          EXISTS (
            SELECT
              1
            FROM
              (
                "3nconnect".promotion_discount_products pdp
                JOIN "3nconnect".promotions pro ON ((pdp.promotion_id = pro.id))
              )
            WHERE
              (
                (pro.promotion_start <= NOW())
                AND (pro.promotion_end >= NOW())
                AND (pro.is_active = TRUE)
              )
          )
        ) THEN 'discount' :: text
        ELSE '-' :: text
      END
      ELSE '-' :: text
    END
  END AS product_promotion_type,
  po.online_price,
  CASE
    WHEN (
      EXISTS (
        SELECT
          1
        FROM
          "3nconnect".promotion_flashsale_products pfp
        WHERE
          (pfp.product_option_id = po.id)
      )
    ) THEN (
      SELECT
        pfp.sale_price
      FROM
        "3nconnect".promotion_flashsale_products pfp
      WHERE
        (pfp.product_option_id = po.id)
    )
    ELSE CASE
      WHEN (
        EXISTS (
          SELECT
            1
          FROM
            "3nconnect".promotion_discount_products pdp
          WHERE
            (pdp.product_option_id = po.id)
        )
      ) THEN (
        SELECT
          pdp.sale_price
        FROM
          "3nconnect".promotion_discount_products pdp
        WHERE
          (pdp.product_option_id = po.id)
      )
      ELSE (0) :: double precision
    END
  END AS sale_price,
  CASE
    WHEN (
      EXISTS (
        SELECT
          1
        FROM
          "3nconnect".promotion_flashsale_products pfp
        WHERE
          (pfp.product_option_id = po.id)
      )
    ) THEN (
      SELECT
        pfp.sale_percent
      FROM
        "3nconnect".promotion_flashsale_products pfp
      WHERE
        (pfp.product_option_id = po.id)
    )
    ELSE CASE
      WHEN (
        EXISTS (
          SELECT
            1
          FROM
            "3nconnect".promotion_discount_products pdp
          WHERE
            (pdp.product_option_id = po.id)
        )
      ) THEN (
        SELECT
          pdp.sale_percent
        FROM
          "3nconnect".promotion_discount_products pdp
        WHERE
          (pdp.product_option_id = po.id)
      )
      ELSE (0) :: double precision
    END
  END AS sale_percent,
  po.mat_identity
FROM
  (
    "3nconnect".product_options po
    JOIN "3nconnect".products p ON ((p.id = po.product_id))
  );