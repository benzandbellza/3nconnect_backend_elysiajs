WITH union_planetone_stock AS (
  SELECT
    'Gibthai' :: text AS company_name,
    g."MATUnit",
    g."Lot",
    g."Location ID" AS location_id,
    g."QTY BLN(1)" AS qty_balance,
    g."QTY Ready(2)" AS qty_ready,
    g."QTY PN Out(3)" AS qty_pn_out,
    g."QTY 1-3" AS qty_total,
    g."Unit" AS unit,
    g."Expired" AS expired,
    g."Avail. Life" AS available_life,
    g."Unit Cost" AS unitcost,
    g."Cost BLN" AS costbalance
  FROM
    gibstock g
  UNION
  ALL
  SELECT
    'Lab Leader' :: text AS company_name,
    l."MATUnit",
    l."Lot",
    l."Location ID" AS location_id,
    l."QTY BLN(1)" AS qty_balance,
    l."QTY Ready(2)" AS qty_ready,
    l."QTY PN Out(3)" AS qty_pn_out,
    l."QTY 1-3" AS qty_total,
    l."Unit" AS unit,
    l."Expired" AS expired,
    l."Avail. Life" AS available_life,
    l."Unit Cost" AS unitcost,
    l."Cost BLN" AS costbalance
  FROM
    lableaderstock l
  UNION
  ALL
  SELECT
    'Biodesign' :: text AS company_name,
    b."MATUnit",
    b."Lot",
    b."Location ID" AS location_id,
    b."QTY BLN(1)" AS qty_balance,
    b."QTY Ready(2)" AS qty_ready,
    b."QTY PN Out(3)" AS qty_pn_out,
    b."QTY 1-3" AS qty_total,
    b."Unit" AS unit,
    b."Expired" AS expired,
    b."Avail. Life" AS available_life,
    b."Unit Cost" AS unitcost,
    b."Cost BLN" AS costbalance
  FROM
    biodesignstock b
)
SELECT
  company_name,
  "MATUnit",
  "Lot",
  location_id,
  qty_balance,
  qty_ready,
  qty_pn_out,
  qty_total,
  unit,
  expired,
  available_life,
  unitcost,
  costbalance
FROM
  union_planetone_stock;