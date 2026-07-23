export type PublicPreOrderProductRow = {
  product_name: string | null;
  unit: string | null;
  product_options: Array<{
    id: number;
    mat_identity: string | null;
    option_name: string | null;
    online_price: number | null;
  }>;
  product_images: Array<{
    url_image: string | null;
    is_show: boolean | null;
  }>;
};

export type PublicPreOrderProduct = {
  mat_identity: string | null;
  product_name: string | null;
  unit: string | null;
  online_price: number | null;
  product_option_id: number;
  url_image: string | null;
  option_name: string | null;
};

export function mapPreOrderProducts(
  products: PublicPreOrderProductRow[],
): PublicPreOrderProduct[] {
  return products.flatMap((product) => {
    const image = product.product_images.find((item) => item.is_show === true);

    return product.product_options.map((option) => ({
      mat_identity: option.mat_identity,
      product_name: product.product_name,
      unit: product.unit,
      online_price: option.online_price,
      product_option_id: option.id,
      url_image: image?.url_image ?? null,
      option_name: option.option_name,
    }));
  });
}

export type PublicEventRow = {
  id: string;
  event_pic: string | null;
  eventname: string | null;
  event_detail: string | null;
  event_registerdate: string | null;
  event_preregister: string | null;
  eventStartDate: string | null;
  eventEndDate: string | null;
  location: string | null;
  tierregister: string | null;
  tierpreregister: string | null;
  link: string | null;
  is_active: boolean | null;
};

export function mapPublicEvents(events: PublicEventRow[]) {
  return events.map((event) => ({
    event_id: event.id,
    event_image: event.event_pic,
    event_name: event.eventname,
    event_detail: event.event_detail,
    register_date: event.event_registerdate,
    preregister_date: event.event_preregister,
    event_startdate: event.eventStartDate,
    event_enddate: event.eventEndDate,
    location_name: event.location,
    tier_register: event.tierregister,
    tier_preregister: event.tierpreregister,
    ref_url: event.link,
    is_active: event.is_active,
  }));
}
