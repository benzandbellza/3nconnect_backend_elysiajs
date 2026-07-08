SELECT
  (id) :: integer AS id,
  created_at,
  company_name,
  "Entity ID",
  "Entity Name",
  "Address1",
  "Address2",
  "Province",
  "Country",
  "PostCode",
  "Tax Number",
  "Branch Tax Name",
  "Branch Tax ID"
FROM
  invoicehead i;