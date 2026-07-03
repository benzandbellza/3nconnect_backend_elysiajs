import { Prisma } from "@prisma/client";
import { prisma } from "../prisma_connection";

type OrderBillingPayload = {
  order_billing: Array<{
    billing_detail: {
      order_no: string;
      payment_invoice_no: string;
      buyer_customeruser_id: string;
      payment_method: string | null;
      order_status: string | null;
      admin_verify_status?: string | null;
      im_no: string | null;
      order_type: string | null;
      invoice_id: number | null;
      shipping_address_id: number | null;
      payment_status: string | null;
      log_payment: string | null;
      order_uuid: string | null;
      created_at: string;
      updated_at: string;
      admin_updated_by: string | null;
      admin_updated_at: string | null;
      order_created_by: string | null;
      contact_id: number | null;
      company_id: number | null;
      credit_term_days: number | null;
      credit_payment_duedate: string | null;
      shipping_cost: number | null;
      order_items: Array<{
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
      }>;
      voucher_usage: Array<{
        gift_voucher_code: string | null;
        promotion_id: number | null;
        usaged_at: string | null;
      }>;
    };
  }>;
  payment_2c2p: {
    merchantID: string | null;
    invoiceNo: string | null;
    amount: number | null;
    currencyCode: string | null;
    tranRef: string | null;
    referenceNo: string | null;
    agentCode: string | null;
    channelCode: string | null;
    approvalCode: string | null;
    dateTime: string | null;
    respCode: string | null;
    respDesc: string | null;
    cardInfo: unknown;
  };
};

const samplePayload: OrderBillingPayload = {
  order_billing: [
    {
      billing_detail: {
        order_no: "INV26070001",
        payment_invoice_no: "PAY26070001",
        buyer_customeruser_id: "4f218038-03bb-47e7-9acc-65816725702a",
        payment_method: "visa_card",
        order_status: "Open",
        admin_verify_status: "Pending",
        im_no: null,
        order_type: "inv",
        invoice_id: null,
        shipping_address_id: 9,
        payment_status: "Pending",
        log_payment: "2026-07-03T07:48:25.399Z",
        order_uuid: "018b0c9f-3e9f-4647-b288-858a35f77b65",
        created_at: "2026-07-03T07:48:25.399Z",
        updated_at: "2026-07-03T07:48:25.399Z",
        admin_updated_by: null,
        admin_updated_at: "2026-07-03T07:48:25.399Z",
        order_created_by: null,
        contact_id: null,
        company_id: 2,
        credit_term_days: null,
        credit_payment_duedate: null,
        shipping_cost: 0,
        order_items: [
          {
            product_option_id: 12,
            order_product_quantity: 2,
            item_status: null,
            mr_code: null,
            location_code: null,
            product_owner: null,
            expire_date: null,
            lot_number: null,
            order_price: 2800,
            sale_price: 1720,
            waiting_out_quantity: 0,
            admin_updated_by: null,
            admin_updated_at: null,
            is_free: false,
            promotion_from_product_option_id: null,
          },
          {
            product_option_id: 11,
            order_product_quantity: 1,
            item_status: null,
            mr_code: null,
            location_code: null,
            product_owner: null,
            expire_date: null,
            lot_number: null,
            order_price: 2500,
            sale_price: 1300,
            waiting_out_quantity: 0,
            admin_updated_by: null,
            admin_updated_at: null,
            is_free: false,
            promotion_from_product_option_id: null,
          },
          {
            product_option_id: 8,
            order_product_quantity: 3,
            item_status: null,
            mr_code: null,
            location_code: null,
            product_owner: null,
            expire_date: null,
            lot_number: null,
            order_price: 200,
            sale_price: 0,
            waiting_out_quantity: 0,
            admin_updated_by: null,
            admin_updated_at: null,
            is_free: true,
            promotion_from_product_option_id: 11,
          },
        ],
        voucher_usage: [
          {
            gift_voucher_code: null,
            promotion_id: 30,
            usaged_at: "2026-07-03T07:48:25.399Z",
          },
          {
            gift_voucher_code: null,
            promotion_id: 26,
            usaged_at: "2026-07-03T07:48:25.399Z",
          },
        ],
      },
    },
    {
      billing_detail: {
        order_no: "INV26070002",
        payment_invoice_no: "PAY26070001",
        buyer_customeruser_id: "4f218038-03bb-47e7-9acc-65816725702a",
        payment_method: "visa_card",
        order_status: "Open",
        admin_verify_status: "Pending",
        im_no: null,
        order_type: "inv",
        invoice_id: null,
        shipping_address_id: 9,
        payment_status: "Pending",
        log_payment: "2026-07-03T07:48:25.399Z",
        order_uuid: "018b0c9f-3e9f-4647-b288-858a35f77b65",
        created_at: "2026-07-03T07:48:25.399Z",
        updated_at: "2026-07-03T07:48:25.399Z",
        admin_updated_by: null,
        admin_updated_at: "2026-07-03T07:48:25.399Z",
        order_created_by: null,
        contact_id: null,
        company_id: 1,
        credit_term_days: null,
        credit_payment_duedate: null,
        shipping_cost: 0,
        order_items: [
          {
            product_option_id: 13,
            order_product_quantity: 1,
            item_status: null,
            mr_code: null,
            location_code: null,
            product_owner: null,
            expire_date: null,
            lot_number: null,
            order_price: 700000,
            sale_price: 300000,
            waiting_out_quantity: 0,
            admin_updated_by: null,
            admin_updated_at: null,
            is_free: false,
            promotion_from_product_option_id: null,
          },
        ],
        voucher_usage: [
          {
            gift_voucher_code: null,
            promotion_id: 30,
            usaged_at: "2026-07-03T07:48:25.399Z",
          },
        ],
      },
    },
  ],
  payment_2c2p: {
    merchantID: "JT01",
    invoiceNo: "PAY26070001",
    amount: 708100,
    currencyCode: "THB",
    tranRef: "2C2P-cr_185",
    referenceNo: "REF-cr_185",
    agentCode: "VISA",
    channelCode: "CC",
    approvalCode: null,
    dateTime: "2026-07-03T07:48:25.399Z",
    respCode: "0000",
    respDesc: "Success",
    cardInfo: null,
  },
};

function toDateTime(value: string | null | undefined) {
  return value ? new Date(value) : null;
}

function toDate(value: string | null | undefined) {
  return value ? new Date(value) : null;
}

function mapBillingDetail(
  detail: OrderBillingPayload["order_billing"][number]["billing_detail"],
) {
  return {
    order_no: detail.order_no,
    buyer_customeruser_id: detail.buyer_customeruser_id,
    payment_method_id: detail.payment_method,
    order_status: detail.order_status,
    im_no: detail.im_no,
    order_type: detail.order_type,
    invoice_id: detail.invoice_id,
    shipping_address_id: detail.shipping_address_id,
    payment_status: detail.payment_status,
    log_payment: toDateTime(detail.log_payment),
    order_uuid: detail.order_uuid,
    created_at: new Date(detail.created_at),
    updated_at: toDateTime(detail.updated_at),
    admin_updated_by: detail.admin_updated_by,
    admin_updated_at: toDateTime(detail.admin_updated_at),
    order_created_by: detail.order_created_by,
    contact_id: detail.contact_id,
    company_id: detail.company_id,
    credit_term_days: detail.credit_term_days,
    credit_payment_duedate: toDate(detail.credit_payment_duedate),
    shipping_cost: detail.shipping_cost,
  };
}

function mapOrderItem(
  orderBillingId: number,
  item: OrderBillingPayload["order_billing"][number]["billing_detail"]["order_items"][number],
) {
  return {
    order_billing_id: orderBillingId,
    product_option_id: item.product_option_id,
    order_product_quantity: item.order_product_quantity,
    item_status: item.item_status,
    mr_code: item.mr_code,
    localtion_code: item.location_code,
    product_owner: item.product_owner,
    expire_date: toDate(item.expire_date),
    lot_code: item.lot_number,
    order_price: item.order_price,
    sale_price: item.sale_price,
    waiting_out_quantity: item.waiting_out_quantity,
    admin_updated_by: item.admin_updated_by,
    admin_updated_at: toDateTime(item.admin_updated_at),
    is_free: item.is_free ? 1 : 0,
    promotion_from_product_option_id: item.promotion_from_product_option_id,
  };
}

function mapVoucherUsage(
  orderBillingId: number,
  voucher: OrderBillingPayload["order_billing"][number]["billing_detail"]["voucher_usage"][number],
) {
  return {
    order_billing_id: orderBillingId,
    gift_voucher_code: voucher.gift_voucher_code,
    promotion_id: voucher.promotion_id,
    usaged_at: toDateTime(voucher.usaged_at),
  };
}

function mapPaymentRequest(orderBillingId: number, payload: OrderBillingPayload["payment_2c2p"]) {
  return {
    order_billing_id: orderBillingId,
    invoice_no: payload.invoiceNo,
    merchant_id: payload.merchantID,
    description: null,
    amount: payload.amount,
    currency_code: payload.currencyCode,
    payment_channel_code: payload.channelCode,
    payment_agent_code: payload.agentCode,
    response_url: null,
    backend_url: null,
  };
}

function mapPaymentResponse(payload: OrderBillingPayload["payment_2c2p"]) {
  return {
    invoice_no: payload.invoiceNo ?? "",
    amount: payload.amount,
    currency_code: payload.currencyCode,
    tran_ref: payload.tranRef,
    reference_no: payload.referenceNo,
    payment_agent_code: payload.agentCode,
    payment_channel_code: payload.channelCode,
    approval_code: payload.approvalCode,
    datetime: toDateTime(payload.dateTime),
    response_code: payload.respCode,
    response_description: payload.respDesc,
    card_info:
      payload.cardInfo === null
        ? Prisma.JsonNull
        : (payload.cardInfo as Prisma.InputJsonValue),
  };
}

async function importOrderBillingPayload(payload: OrderBillingPayload) {
  return prisma.$transaction(async (tx) => {
    const createdOrders: Array<{ order_billing_id: number; order_no: string; invoice_no: string | null }> = [];

    for (const entry of payload.order_billing) {
      const detail = entry.billing_detail;

      const createdBilling = await tx.order_billing.create({
        data: mapBillingDetail(detail),
      });

      createdOrders.push({
        order_billing_id: createdBilling.id,
        order_no: detail.order_no,
        invoice_no: payload.payment_2c2p.invoiceNo,
      });

      if (detail.order_items.length > 0) {
        await tx.order_billing_items.createMany({
          data: detail.order_items.map((item) => mapOrderItem(createdBilling.id, item)),
        });
      }

      if (detail.voucher_usage.length > 0) {
        await tx.order_billing_voucher_usage.createMany({
          data: detail.voucher_usage.map((voucher) => mapVoucherUsage(createdBilling.id, voucher)),
        });
      }

      await tx.order_billing_payment.create({
        data: mapPaymentRequest(createdBilling.id, payload.payment_2c2p),
      });
    }

    await tx.order_billing_payment_response.create({
      data: mapPaymentResponse(payload.payment_2c2p),
    });

    return createdOrders;
  });
}

async function main() {
  const result = await importOrderBillingPayload(samplePayload);
  console.log("Imported order billing payload:", result);
}

if (import.meta.main) {
  main()
    .catch((error) => {
      console.error("Import failed:", error);
      process.exitCode = 1;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
