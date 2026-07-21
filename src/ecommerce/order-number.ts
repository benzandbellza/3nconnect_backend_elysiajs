import type { Prisma } from "@prisma/client";

export const MAX_MONTHLY_SEQUENCE = 9999;
export const ORDER_NUMBER_TIME_ZONE = "Asia/Bangkok";

export const getOrderPeriod = (date: Date, timeZone: string): string => {
  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid order date.");
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "2-digit",
    month: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;

  if (!year || !month) {
    throw new Error("Unable to determine order period.");
  }

  return `${year}${month}`;
};

export const formatOrderNumber = (
  period: string,
  sequence: number,
): string => {
  if (!/^\d{4}$/.test(period)) {
    throw new Error("Order period must be YYMM.");
  }

  const month = Number(period.slice(2));
  if (month < 1 || month > 12) {
    throw new Error("Order period contains an invalid month.");
  }

  if (
    !Number.isInteger(sequence) ||
    sequence < 1 ||
    sequence > MAX_MONTHLY_SEQUENCE
  ) {
    throw new Error("Monthly order number limit exceeded.");
  }

  return `INV${period}${String(sequence).padStart(4, "0")}`;
};

export const getOrderNumberPattern = (period: string): string => {
  if (!/^\d{4}$/.test(period)) {
    throw new Error("Order period must be YYMM.");
  }

  const month = Number(period.slice(2));
  if (month < 1 || month > 12) {
    throw new Error("Order period contains an invalid month.");
  }

  return `^INV${period}[0-9]{4}$`;
};

export const allocateNextOrderNumber = async (
  tx: Prisma.TransactionClient,
  orderDate: Date,
): Promise<string> => {
  const period = getOrderPeriod(orderDate, ORDER_NUMBER_TIME_ZONE);
  const pattern = getOrderNumberPattern(period);

  await tx.$executeRaw`
    SELECT pg_advisory_xact_lock(hashtext(${`order-number:${period}`}))
  `;

  const rows = await tx.$queryRaw<{ last_number: number | bigint }[]>`
    SELECT COALESCE(
      MAX(CAST(SUBSTRING("docid" FROM 8 FOR 4) AS INTEGER)),
      0
    ) AS "last_number"
    FROM "public"."IM"
    WHERE "docid" ~ ${pattern}
  `;

  const lastNumber = rows[0]?.last_number;
  if (lastNumber === undefined) {
    throw new Error("Unable to allocate order number.");
  }

  return formatOrderNumber(period, Number(lastNumber) + 1);
};
