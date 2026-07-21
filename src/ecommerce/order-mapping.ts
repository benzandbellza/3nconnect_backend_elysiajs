export type OrderItemInput = {
  product_option_id: number;
  order_product_quantity: number;
  item_status?: string | null;
  mr_code?: string | null;
  localtion_code?: string | null;
  product_owner?: string | null;
  expire_date?: string | null;
  lot_code?: string | null;
  sale_price: number;
  order_price: number;
  waiting_out_quantity?: number | null;
  is_free: boolean;
  promotion_from_product_option_id?: number | null;
};

export type ImGoodsCreateData = {
  docid: number;
  product_option_id: number;
  qty: number;
  itemstatus?: string | null;
  MR?: string | null;
  location?: string | null;
  Owner?: string | null;
  exp?: Date | null;
  lot?: string | null;
  io_qty?: number | null;
  admin_updated_by?: string | null;
  sale_price: number;
  order_price: number;
  admin_updated_at?: Date | null;
  is_free?: boolean | null;
  promotion_from_product_option_id?: number | null;
};

export type ImGoodsResponse = {
  product_option_id: number | null;
  qty: number;
  itemstatus: string | null;
  MR: string | null;
  location: string | null;
  Owner: string | null;
  exp: Date | null;
  lot: string | null;
  io_qty: number | null;
  users_id: string | null;
  sale_price: number | null;
  order_price: number | null;
  admin_updated_at: Date | null;
  is_free: boolean | null;
  promotion_from_product_option_id: number | null;
};

const parseNullableDate = (value?: string | null): Date | null => {
  if (!value || value === "-" || value === "0") return null;

  const slashDateMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (slashDateMatch) {
    const [, dd, mm, yyyy] = slashDateMatch;
    const christianYear =
      Number(yyyy) > 2400 ? Number(yyyy) - 543 : Number(yyyy);
    return new Date(`${christianYear}-${mm}-${dd}`);
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const normalizeBuyerCustomerUserId = (
  value?: string | number | null,
): number | null => {
  if (value === undefined || value === null || value === "") return null;

  const normalized = typeof value === "number" ? value : Number(value);
  if (!Number.isInteger(normalized)) {
    throw new Error("buyer_customeruser_id must be a numeric customer user id.");
  }

  return normalized;
};

export const mapOrderItemToImGoods = (
  docid: number,
  item: OrderItemInput,
  updatedAt: Date | null,
  updatedBy?: string | null,
): ImGoodsCreateData => ({
  docid,
  product_option_id: item.product_option_id,
  qty: item.order_product_quantity,
  itemstatus: item.item_status,
  MR: item.mr_code,
  location: item.localtion_code,
  Owner: item.product_owner,
  exp: parseNullableDate(item.expire_date),
  lot: item.lot_code === "0" ? null : item.lot_code,
  io_qty: item.waiting_out_quantity,
  admin_updated_by: updatedBy,
  sale_price: item.sale_price,
  order_price: item.order_price,
  admin_updated_at: updatedAt,
  is_free: item.is_free,
  promotion_from_product_option_id: item.promotion_from_product_option_id,
});

export const mapImGoodsToOrderItemResponse = (item: ImGoodsResponse) => ({
  product_option_id: item.product_option_id,
  order_product_quantity: item.qty,
  item_status: item.itemstatus,
  mr_code: item.MR,
  localtion_code: item.location,
  product_owner: item.Owner,
  expire_date: item.exp,
  lot_code: item.lot,
  waiting_out_quantity: item.io_qty,
  admin_updated_by: item.users_id,
  sale_price: item.sale_price,
  order_price: item.order_price,
  admin_updated_at: item.admin_updated_at,
  is_free: item.is_free,
  promotion_from_product_option_id: item.promotion_from_product_option_id,
});
