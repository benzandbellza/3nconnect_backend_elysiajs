import { describe, expect, test } from "bun:test";
import { mapCustomerOrderItemToImGoods } from "./order-submit-mapping";

describe("customer order-submit mapping", () => {
  test("maps a legacy order item to an im_goods row", () => {
    expect(
      mapCustomerOrderItemToImGoods(
        42,
        {
          product_option_id: 12,
          order_product_quantity: 2,
          item_status: "waiting",
          mr_code: "MR-1",
          location_code: "A-01",
          product_owner: "owner-1",
          expire_date: "31/12/2569",
          lot_number: "LOT-1",
          order_price: 2800,
          sale_price: 1720,
          waiting_out_quantity: 0,
          admin_updated_by: "admin-1",
          admin_updated_at: "2026-07-23T00:00:00.000Z",
          is_free: false,
          promotion_from_product_option_id: null,
        },
      ),
    ).toEqual({
      docid: 42,
      product_option_id: 12,
      qty: 2,
      itemstatus: "waiting",
      MR: "MR-1",
      location: "A-01",
      Owner: "owner-1",
      exp: new Date("2026-12-31T00:00:00.000Z"),
      lot: "LOT-1",
      io_qty: 0,
      admin_updated_by: "admin-1",
      admin_updated_at: new Date("2026-07-23T00:00:00.000Z"),
      sale_price: 1720,
      order_price: 2800,
      is_free: false,
      promotion_from_product_option_id: null,
    });
  });

  test("turns legacy lot zero into null", () => {
    const mapped = mapCustomerOrderItemToImGoods(42, {
      product_option_id: 12,
      order_product_quantity: 1,
      item_status: null,
      mr_code: null,
      location_code: null,
      product_owner: null,
      expire_date: null,
      lot_number: "0",
      order_price: 100,
      sale_price: 90,
      waiting_out_quantity: null,
      admin_updated_by: null,
      admin_updated_at: null,
      is_free: true,
      promotion_from_product_option_id: 7,
    });

    expect(mapped.lot).toBeNull();
  });
});
