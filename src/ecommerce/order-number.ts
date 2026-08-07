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
  companyShortCode?: string | null,
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

  const shortCode = companyShortCode?.trim();
  const prefix = shortCode ? `${shortCode}-SSR${period}` : `SSR${period}`;

  return `${prefix}${String(sequence).padStart(4, "0")}`;
};

export const getOrderNumberPattern = (
  period: string,
  companyShortCode?: string | null,
): string => {
  if (!/^\d{4}$/.test(period)) {
    throw new Error("Order period must be YYMM.");
  }

  const month = Number(period.slice(2));
  if (month < 1 || month > 12) {
    throw new Error("Order period contains an invalid month.");
  }

  const shortCode = companyShortCode?.trim();
  const prefix = shortCode ? `${shortCode}-SSR${period}` : `SSR${period}`;

  return `^${prefix}[0-9]{4}$`;
};

export const allocateNextOrderNumber = async (
  tx: Prisma.TransactionClient,
  orderDate: Date,
  companyId?: number | null,
): Promise<string> => {
  const period = getOrderPeriod(orderDate, ORDER_NUMBER_TIME_ZONE);
  let companyShortCode: string | null = null;

  if (companyId !== null && companyId !== undefined) {
    try {
      const company = await tx.public_companies.findUnique({
        where: { id: companyId },
        select: { short: true },
      });
      companyShortCode = company?.short?.trim() || null;
    } catch {
      companyShortCode = null;
    }
  }

  const prefix = companyShortCode
    ? `${companyShortCode}-SSR${period}`
    : `SSR${period}`;
  const pattern = getOrderNumberPattern(period, companyShortCode);

  await tx.$executeRaw`
    SELECT pg_advisory_xact_lock(hashtext(${`order-number:${prefix}`}))
  `;

  const rows = await tx.$queryRaw<{ last_number: number | bigint }[]>`
    SELECT COALESCE(
      MAX(CAST(SUBSTRING("docid" FROM ${prefix.length + 1} FOR 4) AS INTEGER)),
      0
    ) AS "last_number"
    FROM "public"."IM"
    WHERE "docid" ~ ${pattern}
  `;

  const lastNumber = rows[0]?.last_number;
  if (lastNumber === undefined) {
    throw new Error("Unable to allocate order number.");
  }

  return formatOrderNumber(period, Number(lastNumber) + 1, companyShortCode);
};
