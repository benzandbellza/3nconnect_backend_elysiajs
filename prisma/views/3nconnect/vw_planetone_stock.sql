WITH union_planetone_stock AS (
  SELECT
    gibstock."MATUnit",
    sum(gibstock."QTY 1-3") AS grandqty,
    'Gibthai' :: text AS company
  FROM
    gibstock
  GROUP BY
    gibstock."MATUnit"
  UNION
  ALL
  SELECT
    l."MATUnit",
    sum(l."QTY 1-3") AS grandqty,
    'LabLeader' :: text AS company
  FROM
    lableaderstock l
  GROUP BY
    l."MATUnit"
  UNION
  ALL
  SELECT
    b."MATUnit",
    sum(b."QTY 1-3") AS grandqty,
    'BioDesign' :: text AS company
  FROM
    biodesignstock b
  GROUP BY
    b."MATUnit"
)
SELECT
  "MATUnit",
  grandqty,
  company
FROM
  union_planetone_stock;