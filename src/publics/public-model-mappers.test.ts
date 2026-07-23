import { describe, expect, test } from "bun:test";
import { mapPreOrderProducts, mapPublicEvents } from "./public-model-mappers";

describe("public model mappers", () => {
  test("flattens pre-order product options and uses the shown product image", () => {
    const result = mapPreOrderProducts([
      {
        product_name: "Pre-order product",
        unit: "ชิ้น",
        product_options: [
          {
            id: 42,
            mat_identity: "MAT-42",
            option_name: "แดง",
            online_price: 199,
          },
        ],
        product_images: [
          { url_image: "hidden.png", is_show: false },
          { url_image: "shown.png", is_show: true },
        ],
      },
    ]);

    expect(result).toEqual([
      {
        mat_identity: "MAT-42",
        product_name: "Pre-order product",
        unit: "ชิ้น",
        online_price: 199,
        product_option_id: 42,
        url_image: "shown.png",
        option_name: "แดง",
      },
    ]);
  });

  test("maps public event fields to the existing publics response aliases", () => {
    const result = mapPublicEvents([
      {
        id: "event-1",
        event_pic: "event.png",
        eventname: "Public event",
        event_detail: "Details",
        event_registerdate: "2026-07-22",
        event_preregister: "2026-07-21",
        eventStartDate: "2026-07-23",
        eventEndDate: "2026-07-24",
        location: "Bangkok",
        tierregister: "member",
        tierpreregister: "premium",
        link: "https://example.com/event-1",
        is_active: true,
      },
    ]);

    expect(result).toEqual([
      {
        event_id: "event-1",
        event_image: "event.png",
        event_name: "Public event",
        event_detail: "Details",
        register_date: "2026-07-22",
        preregister_date: "2026-07-21",
        event_startdate: "2026-07-23",
        event_enddate: "2026-07-24",
        location_name: "Bangkok",
        tier_register: "member",
        tier_preregister: "premium",
        ref_url: "https://example.com/event-1",
        is_active: true,
      },
    ]);
  });
});
