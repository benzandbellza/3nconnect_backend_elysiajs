import { describe, expect, test } from "bun:test";
import {
  mapImGoodsToOrderItemResponse,
  mapOrderItemToImGoods,
} from "./order-mapping";

describe("order table mapping", () => {
  test("maps billing item fields into im_goods fields", () => {
    const mapped = mapOrderItemToImGoods(
      42,
      {
        product_option_id: 7,
        order_product_quantity: 3,
        item_status: "waiting",
        mr_code: "MR-1",
        localtion_code: "A-01",
        product_owner: "owner-1",
        expire_date: "31/12/2026",
        lot_code: "LOT-1",
        sale_price: 100,
        order_price: 90,
        waiting_out_quantity: 2,
        is_free: false,
        promotion_from_product_option_id: 9,
      },
      new Date("2026-07-21T00:00:00.000Z"),
      "00000000-0000-0000-0000-000000000001",
    );

    expect(mapped).toEqual({
      docid: 42,
      product_option_id: 7,
      qty: 3,
      itemstatus: "waiting",
      MR: "MR-1",
      location: "A-01",
      Owner: "owner-1",
      exp: new Date("2026-12-31T00:00:00.000Z"),
      lot: "LOT-1",
      io_qty: 2,
      users_id: "00000000-0000-0000-0000-000000000001",
      sale_price: 100,
      order_price: 90,
      admin_updated_at: new Date("2026-07-21T00:00:00.000Z"),
      is_free: false,
      promotion_from_product_option_id: 9,
    });
  });

  test("maps im_goods fields back to the existing API item shape", () => {
    expect(
      mapImGoodsToOrderItemResponse({
        product_option_id: 7,
        qty: 3,
        itemstatus: "waiting",
        MR: "MR-1",
        location: "A-01",
        Owner: "owner-1",
        exp: new Date("2026-12-31T00:00:00.000Z"),
        lot: "LOT-1",
        io_qty: 2,
        users_id: "00000000-0000-0000-0000-000000000001",
        sale_price: 100,
        order_price: 90,
        admin_updated_at: new Date("2026-07-21T00:00:00.000Z"),
        is_free: false,
        promotion_from_product_option_id: 9,
      }),
    ).toEqual({
      product_option_id: 7,
      order_product_quantity: 3,
      item_status: "waiting",
      mr_code: "MR-1",
      localtion_code: "A-01",
      product_owner: "owner-1",
      expire_date: new Date("2026-12-31T00:00:00.000Z"),
      lot_code: "LOT-1",
      waiting_out_quantity: 2,
      admin_updated_by: "00000000-0000-0000-0000-000000000001",
      sale_price: 100,
      order_price: 90,
      admin_updated_at: new Date("2026-07-21T00:00:00.000Z"),
      is_free: false,
      promotion_from_product_option_id: 9,
    });
  });
});
