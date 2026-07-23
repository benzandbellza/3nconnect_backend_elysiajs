export type CustomerOrderItemInput = {
  product_option_id: number | null;
  order_product_quantity: number | null;
  item_status: string | null;
  mr_code: string | null;
  location_code: string | null;
  product_owner: string | null;
  expire_date: string | null;
  lot_number: string | null;
  order_price: number | null;
  sale_price: number | null;
  waiting_out_quantity: number | null;
  admin_updated_by: string | null;
  admin_updated_at: string | null;
  is_free: boolean;
  promotion_from_product_option_id: number | null;
};

const parseNullableDate = (value?: string | null): Date | null => {
  if (!value || value === "-" || value === "0") return null;

  const slashDateMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (slashDateMatch) {
    const [, dd, mm, yyyy] = slashDateMatch;
    const christianYear = Number(yyyy) > 2400 ? Number(yyyy) - 543 : Number(yyyy);
    return new Date(`${christianYear}-${mm}-${dd}`);
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const requireNumber = (value: number | null, field: string): number => {
  if (value === null || !Number.isFinite(value)) {
    throw new Error(`${field} is required.`);
  }
  return value;
};

export const mapCustomerOrderItemToImGoods = (
  docid: number,
  item: CustomerOrderItemInput,
) => ({
  docid,
  product_option_id: requireNumber(item.product_option_id, "product_option_id"),
  qty: requireNumber(item.order_product_quantity, "order_product_quantity"),
  itemstatus: item.item_status,
  MR: item.mr_code,
  location: item.location_code,
  Owner: item.product_owner,
  exp: parseNullableDate(item.expire_date),
  lot: item.lot_number === "0" ? null : item.lot_number,
  io_qty: item.waiting_out_quantity,
  admin_updated_by: item.admin_updated_by,
  admin_updated_at: parseNullableDate(item.admin_updated_at),
  sale_price: requireNumber(item.sale_price, "sale_price"),
  order_price: requireNumber(item.order_price, "order_price"),
  is_free: item.is_free,
  promotion_from_product_option_id: item.promotion_from_product_option_id,
});
