import { Elysia, replaceUrlPath, t } from "elysia";
import { prisma } from "./prisma_connection";
import { auth } from "../plugins/auth";
import "dotenv/config";

export const ecommerceCustomerRoute = new Elysia({
  prefix: "/api/ecommerce-customer",
})
  .use(auth())
  .get(
    "/myaccount/address/:customeruser_id",
    async({ headers, set, params }) => {
      const customeruser_id = params.customeruser_id;
      try {
        const response = await prisma.customer_address.findMany({
          where: {
            customeruser_id: customeruser_id
          },
          orderBy: {
            id: "asc"
          }
        })

        if(!response){
          set.status = 400;
          return {message: "Cannot get Address by customeruser_id"}
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting customers:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        customeruser_id: t.String()
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - Find Address by CustomerUserID",
        description: `
          This endpoint gets all customer address by customeruser_id in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/myaccount/address",
    async({ headers, set, body }) => {
      try {
        const response = await prisma.customer_address.create({
          data: body,
          select: {
            id: true,
          }
        })
        const address_id = response.id
        if(body.set_default){
          await prisma.customer_address.updateMany({
            where: {
              id: { 
                not: address_id
              }
            },
            data: {
              set_default: false
            }
          })
          await prisma.customer_address.update({
            where: {
              id: address_id
            },
            data: {
              set_default: body.set_default
            }
          })
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting customers:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        customeruser_id: t.String(),
        tag_name: t.Any(),
        receiver_name: t.String(),
        phone_no: t.String(),
        address_name: t.String(),
        address_line1: t.Any(),
        address_line2: t.Any(),
        sub_district: t.String(),
        district: t.String(),
        province: t.String(),
        post_code: t.String(),
        set_default: t.Boolean(),
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - Create Address",
        description: `
          This endpoint use to create new address in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .put(
    "/myaccount/address/:customer_address_id",
    async({ headers, set, body, params }) => {
      try {
        const customer_address_id = params.customer_address_id;
        const response = await prisma.customer_address.update({
          where:{
            id: customer_address_id
          },
          data: body
        })
        if(body.set_default){
          await prisma.customer_address.updateMany({
            where: {
              id: { 
                not: customer_address_id
              }
            },
            data: {
              set_default: false
            }
          })
          await prisma.customer_address.update({
            where: {
              id: customer_address_id
            },
            data: {
              set_default: body.set_default
            }
          })
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting customers:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        customeruser_id: t.String(),
        tag_name: t.Any(),
        receiver_name: t.String(),
        phone_no: t.String(),
        address_name: t.String(),
        address_line1: t.Any(),
        address_line2: t.Any(),
        sub_district: t.String(),
        district: t.String(),
        province: t.String(),
        post_code: t.String(),
        set_default: t.Boolean(),
      }),
      params: t.Object({
        customer_address_id: t.Number(),
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - Update Address",
        description: `
          This endpoint use to update address in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/myaccount/tier/:customeruser_id",
    async({ headers, set, params}) => {
      try{
        const customeruser_id = params.customeruser_id;
        const response = await prisma.vw_customer_information.findFirst({
          where : {
            user_id: customeruser_id
          },
          select: {
            user_id: true,
            tier: true,
            tier_start_at: true,
            tier_expired_at: true,
          }
        })

        if(!response){
          set.status = 404;
          return { message: "Cannot find customer tier by customeruser_id" }
        }
        return response;
      } catch (error) {
        set.status = 500;
        return {message : error}
      }
    },
    {
      params: t.Object({
        customeruser_id: t.String(),
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - My Tier",
        description: `
          This endpoint use to find customer tier by customeruser_id.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/myaccount/total_points/:customeruser_id",
    async({ headers, set, params}) => {
      try{
        const customeruser_id = params.customeruser_id;
        const response = await prisma.vw_total_points_customeruser.findFirst({
          where : {
            user_id: customeruser_id
          },
          select: {
            total_points: true,
          }
        })

        if(!response){
          return { total_points: 0 }
        }
        return response;
      } catch (error) {
        set.status = 500;
        return {message : error}
      }
    },
    {
      params: t.Object({
        customeruser_id: t.String(),
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - Find Total Points by CustomerUserID",
        description: `
          This endpoint use to find total points by customeruser_id.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/myaccount/reward_points/transactions/:customeruser_id",
    async({ headers, set, params}) => {
      try{
        const customeruser_id = params.customeruser_id;
        const response = await prisma.vw_reward_point_transactions_customeruser.findMany({
          where : {
            user_id: customeruser_id
          },
          select: {
            created_at: true,
            expired_at: true,
            redeem_point: true,
            redeem_exp: true,
            reason: true,
          }
        });

        return response;
      } catch (error) {
        set.status = 500;
        return {message : error}
      }
    },
    {
      params: t.Object({
        customeruser_id: t.String(),
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - Find Reward Points Transactions by CustomerUserID",
        description: `
          This endpoint use to find reward points transaction by customeruser_id.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/myaccount/tier_points/:customeruser_id",
    async({ headers, set, params}) => {
      try{
        const customeruser_id = params.customeruser_id;
        const response = await prisma.vw_tier_points_customeruser.findFirst({
          where : {
            user_id: customeruser_id
          },
          select: {
            total_points: true,
            expired_at: true,
          }
        });

        return response;
      } catch (error) {
        set.status = 500;
        return {message : error}
      }
    },
    {
      params: t.Object({
        customeruser_id: t.String(),
      }),
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "eCommerce Customer - Find Tier Points by CustomerUserID",
        description: `
          This endpoint use to find tier points transaction by customeruser_id.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/products/payment",
    async({ headers, set, body}) => {
      try {
        const product_option_ids = body.product_option_ids
        const response = await prisma.vw_product_payment_methods.findMany({
          where: {
            product_option_id: {
              in : product_option_ids
            }
          },
          select: {
            product_name: true,
            option_name: true,
            credit_terms: true,
            mobile_banking: true,
            qr_code_promptpay: true,
            visa_card: true,
          }
        });

        if(!response){
          set.status = 404;
          return { message: "Cannot read payment products." } ;
        }

        return response;

      } catch (error) {
        set.status = 500;
        return { message: error};
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        product_option_ids: t.Array(t.Number()),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products Payment - Check Payment Each Products",
        description: `
          This endpoint check payment each products.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .post(
    "/checkout/review",
    async ({ headers, body, set }) => {
      try{
        const { products, customeruser_id } = body;
        const now = new Date();
        const expiresAt = new Date(Date.now() + 8 * 60 * 60 * 1000);
        const productInformation: Array<{
          product_option_id: number | null;
          product_name: string | null;
          quantity: number;
          online_price: number;
          sale_price: number;
          sale_percent: number;
          promotion_type: string | null;
          mat_identity: string | null;
          option_name: string | null;
          unit: string | null;
          url_image: string | null;
          stock_qty: number;
          company_name: string | null;
          get_x_free_y: Array<{
            get_quantity: number | null;
            get_product_unit: string | null;
            free_url_image: string | null;
            free_product_option_id: number | null;
            free_product_name: string | null;
            free_product_price: number | null;
            free_quantity: number | null;
            free_product_unit: string | null;
            customer_tiers: string[] | null;
          }>;
          extra_points: number;
          is_pre_order: boolean | null;
        }> = [];

        await prisma.cart_reviews.deleteMany({
          where: {
            customeruser_id: customeruser_id
          }
        })

        const resCreateCartReview = await prisma.cart_reviews.create({
          data: {
            review_token: `token_${crypto.randomUUID()}`,
            expires_at: expiresAt,
            requires_sign_in_for_voucher: true,
            requires_sign_in_for_payment: true,
            created_at: now,
            customeruser_id: customeruser_id
          },
          select : {
            id: true,
            review_token: true,
            expires_at: true,
            requires_sign_in_for_voucher: true,
            requires_sign_in_for_payment: true,
          }
        });

        for(const product of products){
          const findPromotionProducts = await prisma.vw_promotion_products_index.findFirst({
            where: {
              product_option_id: product.product_option_id,
              mat_identity: product.mat_identity,
            },
            select: {
              product_option_id: true,
              product_name: true,
              company_name: true,
              online_price: true,
              sale_price: true,
              sale_percent: true,
              unit: true,
              mat_identity: true,
              url_image: true,
              promotion_type: true,
              option_name: true,
              is_accept_overlapse_promotion: true,
              is_pre_order: true,
            }
          });

          const stock = await prisma.vw_planetone_stocks.findFirst({
            where: {
              MATUnit: {
                startsWith: findPromotionProducts?.mat_identity || ''
              }
            },
            select: {
              qty_total: true,
            }
          });
          const stock_qty: number = stock?.qty_total || 0;
          
          // List รายการสินค้าทั้งหมด ทั้งที่ร่วมโปรโมชั่นและไม่ร่วมโปรโมชั่น เพื่อใช้ในการแสดงข้อมูลในหน้า My Cart
          if(findPromotionProducts){
            const promotion = {
              product_option_id: findPromotionProducts.product_option_id ?? null,
              product_name: findPromotionProducts.product_name ?? null,
              quantity: product.quantity,
              online_price: findPromotionProducts.online_price ?? 0,
              sale_price: findPromotionProducts.sale_price ?? findPromotionProducts.online_price ?? 0,
              sale_percent: findPromotionProducts.sale_percent ?? 0,
              promotion_type: findPromotionProducts.promotion_type ?? null,
              mat_identity: findPromotionProducts.mat_identity ?? null,
              option_name: findPromotionProducts.option_name ?? null,
              unit: findPromotionProducts.unit ?? null,
              url_image: findPromotionProducts.url_image ?? null,
              stock_qty: stock_qty,
              company_name: findPromotionProducts.company_name ?? null,
              get_x_free_y: [] as Array<any>,
              extra_points: 1 as number, // สมมติว่ามีการให้คะแนนสะสมพิเศษสำหรับโปรโมชั่นนี้
              is_pre_order: findPromotionProducts.is_pre_order ?? null,
            }
            // เข้าร่วมรายการ Flash Sale หรือ Discount
            if(findPromotionProducts.promotion_type === 'flash_sale' || findPromotionProducts.promotion_type === 'discount'){
              //  สามารถทับซ้อนกับโปรโมชั่นอื่นได้
              if(findPromotionProducts.is_accept_overlapse_promotion){
                // ดึงข้อมูลโปรโมชั่นแบบซื้อ X แถม Y ที่สามารถทับซ้อนกับโปรโมชั่น Flash Sale หรือ Discount ได้
                const bundleDeal = await prisma.vw_promotion_bundle_deal_index.findMany({
                  where: {
                    get_product_option_id: findPromotionProducts.product_option_id,
                    is_accept_overlapse_promotion: true,
                  },
                  select: {
                    get_quantity: true,
                    get_product_unit: true,
                    free_url_image: true,
                    free_product_option_id: true,
                    free_product_name: true,
                    free_product_price: true,
                    free_quantity: true,
                    free_product_unit: true,
                    customer_tiers: true,
                  }
                });
                if(bundleDeal.length > 0){
                  promotion.get_x_free_y = bundleDeal.map(deal => ({
                    get_quantity: deal.get_quantity,
                    get_product_unit: deal.get_product_unit,
                    free_url_image: deal.free_url_image,
                    free_product_option_id: deal.free_product_option_id,
                    free_product_name: deal.free_product_name,
                    free_product_price: deal.free_product_price,
                    free_quantity: deal.free_quantity,
                    free_product_unit: deal.free_product_unit,
                    customer_tiers: deal.customer_tiers,
                  }));
                }

                const extraPoints = await prisma.vw_promotion_extra_points_products_index.findFirst({
                  where : {
                    product_option_id: findPromotionProducts.product_option_id,
                  },
                  select: {
                    points_multiplier: true,
                  }
                });
                if(extraPoints){
                  promotion.extra_points = extraPoints.points_multiplier || 1;
                }
                productInformation.push(promotion);
              }else{
                // Flash Sale หรือ Discount ที่ไม่สามารถทับซ้อนกับโปรโมชั่นอื่นได้ จึงแสดงเฉพาะโปรโมชั่นนี้เพียงรายการเดียว
                productInformation.push(promotion)
              }
            } else {
              const bundleDeal = await prisma.vw_promotion_bundle_deal_index.findMany({
                  where: {
                    get_product_option_id: findPromotionProducts.product_option_id,
                    is_accept_overlapse_promotion: true,
                  },
                  select: {
                    get_quantity: true,
                    get_product_unit: true,
                    free_url_image: true,
                    free_product_option_id: true,
                    free_product_name: true,
                    free_product_price: true,
                    free_quantity: true,
                    free_product_unit: true,
                    customer_tiers: true,
                  }
                });
              if(bundleDeal.length > 0){
                promotion.get_x_free_y = bundleDeal.map(deal => ({
                  get_quantity: deal.get_quantity,
                  get_product_unit: deal.get_product_unit,
                  free_url_image: deal.free_url_image,
                  free_product_option_id: deal.free_product_option_id,
                  free_product_name: deal.free_product_name,
                  free_product_price: deal.free_product_price,
                  free_quantity: deal.free_quantity,
                  free_product_unit: deal.free_product_unit,
                  customer_tiers: deal.customer_tiers,
                }));
              }

              const extraPoints = await prisma.vw_promotion_extra_points_products_index.findFirst({
                where : {
                  product_option_id: findPromotionProducts.product_option_id,
                },
                select: {
                  points_multiplier: true,
                }
              });
              if(extraPoints){
                promotion.extra_points = extraPoints.points_multiplier || 1;
              }

              productInformation.push(promotion);
              
            }
          }else{
            set.status = 404;
            return { message: `Product not found for product_option_id ${product.product_option_id}` };
          }
        }

        const cartSummary = productInformation.reduce(
          (summary, item) => {
            const effectivePrice =
              item.promotion_type && item.sale_price > 0 ? item.sale_price : item.online_price;
            const subtotal = item.online_price * item.quantity;
            const grandTotal = effectivePrice * item.quantity;
            const discountTotal = (item.online_price - effectivePrice) * item.quantity;
            const totalPoints = (effectivePrice / 1000) * item.extra_points * item.quantity;

            summary.subtotal += subtotal;
            summary.discount_total += discountTotal;
            summary.grand_total += grandTotal;
            summary.total_points += totalPoints;
            return summary;
          },
          {
            subtotal: 0,
            discount_total: 0,
            grand_total: 0,
            total_points: 0,
          }
        );

        const grandTotalPromotion = await prisma.vw_promotion_grandtotal_bill_index.findFirst({
          where: {
            minimum_grand_total: {
              lte: cartSummary.grand_total
            },
            is_accept_overlapse_promotion: true,
          },
          select: {
            bundle_deal_grand_total_tiers_id: true,
          },
          orderBy: {
            level_no: "desc"
          }
        });

        const freeGifts = grandTotalPromotion?.bundle_deal_grand_total_tiers_id
          ? await prisma.vw_promotion_grandtotal_bill_index.findMany({
              where: {
                bundle_deal_grand_total_tiers_id: grandTotalPromotion.bundle_deal_grand_total_tiers_id
              },
              select: {
                product_option_id: true,
                product_name: true,
                option_name: true,
                online_price: true,
                free_quantity: true,
                url_image: true,
              }
            })
          : [];

        const promotionEligibility = {
          has_any_promotion: productInformation.some(
            (item) =>
              (!!item.promotion_type && item.promotion_type !== "-") ||
              item.get_x_free_y.length > 0
          ),
          flash_sale: productInformation.some((item) => item.promotion_type === "flash_sale"),
          discount: productInformation.some((item) => item.promotion_type === "discount"),
          get_x_free_y: productInformation.some((item) => item.get_x_free_y.length > 0),
          grand_total_free_y: freeGifts.length > 0,
        };

        return {
          review_id: `cr_${resCreateCartReview.id}`,
          review_token: resCreateCartReview.review_token,
          expires_at: resCreateCartReview.expires_at,
          items: productInformation,
          cart_summary: cartSummary,
          promotion_eligibility: promotionEligibility,
          free_gifts: freeGifts,
          requires_sign_in_for_voucher: resCreateCartReview.requires_sign_in_for_voucher ?? true,
          requires_sign_in_for_payment: resCreateCartReview.requires_sign_in_for_payment ?? true,
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching mycart information:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        products: t.Array(
          t.Object({
            product_option_id: t.Number(),
            mat_identity: t.String(),
            quantity: t.Number(),
          })
        ),
        customeruser_id: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Find By Category ID",
        description: `
          This endpoint retrieves products by their category ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .post(
    "/checkout/review/vouchers",
    async({ headers, set, body}) => {
      try {
        const { review_token, has_any_promotion } = body;
        const now = new Date();

        const review = await prisma.cart_reviews.findFirst({
          where: {
            review_token: review_token,
          },
          select: {
            customeruser_id: true,
            expires_at: true,
            requires_sign_in_for_voucher: true,
          }
        });

        if(!review){
          set.status = 404;
          return { message: "Review token not found." };
        }

        if(review.expires_at && review.expires_at < now){
          set.status = 400;
          return { message: "Review token has expired." };
        }

        const eventVouchers = await prisma.gift_voucher.findMany({
          where: {
            gift_voucher_type: "event",
            is_active: true,
          },
          select: {
            id: true,
            voucher_name: true,
          }
        });

        const eventVoucherIds = eventVouchers.map((voucher) => voucher.id);

        const campaignVouchers = eventVoucherIds.length > 0
          ? await prisma.gift_voucher_campaign_voucher.findMany({
              where: {
                gift_voucher_id: {
                  in: eventVoucherIds,
                },
                generic_voucher_id: {
                  not: null,
                },
              },
              select: {
                gift_voucher_id: true,
                generic_voucher_id: true,
              }
            })
          : [];

        const eventVoucherNameById = new Map(
          eventVouchers.map((voucher) => [voucher.id, voucher.voucher_name ?? ""])
        );

        const campaignNameByGenericVoucherId = new Map<number, string>();
        for (const campaignVoucher of campaignVouchers) {
          if (
            campaignVoucher.generic_voucher_id !== null &&
            !campaignNameByGenericVoucherId.has(campaignVoucher.generic_voucher_id)
          ) {
            campaignNameByGenericVoucherId.set(
              campaignVoucher.generic_voucher_id,
              eventVoucherNameById.get(campaignVoucher.gift_voucher_id ?? -1) ?? ""
            );
          }
        }

        const genericVoucherIds = [...campaignNameByGenericVoucherId.keys()];

        const vouchers = genericVoucherIds.length > 0
          ? await prisma.gift_voucher.findMany({
              where: {
                id: {
                  in: genericVoucherIds,
                },
                gift_voucher_type: "generic",
                is_active: true,
                ...(has_any_promotion
                  ? { is_accept_overlapse_promotion: true }
                  : {}),
                OR: [
                  { is_lifetime_period: true },
                  {
                    AND: [
                      {
                        OR: [
                          { campaign_start: null },
                          { campaign_start: { lte: now } },
                        ]
                      },
                      {
                        OR: [
                          { campaign_end: null },
                          { campaign_end: { gte: now } },
                        ]
                      }
                    ]
                  }
                ]
              },
              select: {
                id: true,
                voucher_uuid: true,
                voucher_name: true,
                is_specific_customers: true,
                specific_customers: true,
                gift_voucher_generic: {
                  select: {
                    discount_type: true,
                    min_purchase: true,
                    max_discount: true,
                    percent_discount: true,
                  }
                }
              }
            })
          : [];

        const eligibleVouchers = vouchers
          .filter((voucher) => {
            if(!voucher.is_specific_customers){
              return true;
            }

            if(!review.customeruser_id){
              return false;
            }

            return voucher.specific_customers.includes(review.customeruser_id);
          })
          .map((voucher) => {
            const genericVoucher = voucher.gift_voucher_generic[0];

            const value =
              genericVoucher?.discount_type === 'percentage' ? genericVoucher?.percent_discount : genericVoucher?.max_discount;
              
            const discount_type = 
              genericVoucher?.discount_type === 'percentage' ? 'percent' : 'thb';
            
            const min_purchase = genericVoucher?.min_purchase ?? 0;
            const max_discount = genericVoucher?.max_discount;

            return {
              code: voucher.voucher_uuid,
              title: voucher.voucher_name,
              campaignName: campaignNameByGenericVoucherId.get(voucher.id) ?? "",
              value: value,
              discount_type: discount_type,
              max_discount: max_discount,
              min_purchase: min_purchase,
            };
          });

        return {
          eligible_vouchers: eligibleVouchers
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching eligible vouchers:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        review_token: t.String(),
        has_any_promotion: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Checkout Review - Eligible Vouchers",
        description: `
          This endpoint retrieves eligible vouchers for a checkout review token.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .post(
    "/checkout/review/redeem-code",
    async({ headers, set, body}) => {
      try {
        const { review_token, redeem_code, has_any_promotion } = body;
        const now = new Date();

        const review = await prisma.cart_reviews.findFirst({
          where: {
            review_token: review_token,
          },
          select: {
            customeruser_id: true,
            expires_at: true,
          }
        });

        if(!review){
          set.status = 404;
          return { message: "Review token not found." };
        }

        if(review.expires_at && review.expires_at < now){
          set.status = 400;
          return { message: "Review token has expired." };
        }

        const voucher = await prisma.gift_voucher.findFirst({
          where: {
            gift_voucher_type: "redeem_code",
            is_active: true,
            ...(has_any_promotion
              ? { is_accept_overlapse_promotion: true }
              : {}),
            OR: [
              { is_lifetime_period: true },
              {
                AND: [
                  {
                    OR: [
                      { campaign_start: null },
                      { campaign_start: { lte: now } },
                    ]
                  },
                  {
                    OR: [
                      { campaign_end: null },
                      { campaign_end: { gte: now } },
                    ]
                  }
                ]
              }
            ],
            gift_voucher_redeem_code: {
              some: {
                redeem_code: redeem_code,
              }
            }
          },
          select: {
            id: true,
            voucher_name: true,
            limited_total_quantity: true,
            gift_voucher_redeem_code: {
              where: {
                redeem_code: redeem_code,
              },
              select: {
                redeem_code: true,
                max_discount: true,
              }
            },
            gift_voucher_generic: {
              select: {
                discount_type: true,
                min_purchase: true,
                max_discount: true,
                percent_discount: true,
              }
            }
          }
        });

        if(!voucher){
          set.status = 400;
          return {
            success: false,
            message: "Redeem Code นี้หมดอายุหรือถูกใช้ไปแล้ว",
            error_code: "REDEEM_CODE_INVALID"
          };
        }

        if(review.customeruser_id){
          const existingRedeem = await prisma.customer_redeem_code.findFirst({
            where: {
              customeruser_id: review.customeruser_id,
              gift_voucher_id: voucher.id,
              used_at: {
                not: null,
              }
            },
            select: {
              id: true,
            }
          });

          if(existingRedeem){
            set.status = 400;
            return {
              success: false,
              message: "Redeem Code นี้หมดอายุหรือถูกใช้ไปแล้ว",
              error_code: "REDEEM_CODE_INVALID"
            };
          }
        }

        if(voucher.limited_total_quantity !== null && voucher.limited_total_quantity !== undefined){
          const totalRedeemed = await prisma.customer_redeem_code.count({
            where: {
              gift_voucher_id: voucher.id,
              used_at: {
                not: null,
              }
            }
          });

          if(totalRedeemed >= voucher.limited_total_quantity){
            set.status = 400;
            return {
              success: false,
              message: "Redeem Code นี้หมดอายุหรือถูกใช้ไปแล้ว",
              error_code: "REDEEM_CODE_INVALID"
            };
          }
        }

        const genericVoucher = voucher.gift_voucher_generic[0];
        const redeemCodeDetail = voucher.gift_voucher_redeem_code[0];
        const appliedValue =
          genericVoucher?.discount_type === "percentage"
            ? genericVoucher?.percent_discount ?? 0
            : redeemCodeDetail?.max_discount ?? genericVoucher?.max_discount ?? 0;

        return {
          success: true,
          applied_voucher: {
            voucher_id: String(voucher.id),
            code: redeemCodeDetail?.redeem_code ?? redeem_code,
            title: `Redeem Code ${redeemCodeDetail?.redeem_code ?? redeem_code}`,
            campaign_name: voucher.voucher_name ?? "",
            value: appliedValue,
            discount_type: genericVoucher?.discount_type === "percentage" ? "percent" : "thb",
            max_discount: redeemCodeDetail?.max_discount ?? genericVoucher?.max_discount ?? 0,
            minimum_spend: genericVoucher?.min_purchase ?? 0,
          },
          message: "ใช้โค้ดสำเร็จ"
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error validating redeem code:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        review_token: t.String(),
        redeem_code: t.String(),
        has_any_promotion: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Checkout Review - Redeem Code Validation",
        description: `
          This endpoint validates a redeem code for a checkout review token.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .post(
    "/delivery-address/:customeruser_id",
    async({ headers, set, params}) => {
      try{
        const customeruser_id = params.customeruser_id;
        const response = await prisma.customer_address.findFirst({
          where: {
            customeruser_id: customeruser_id,
            set_default: true,
          },
          select: {
            id: true,
            receiver_name: true,
            phone_no: true,
            address_name: true,
            address_line1: true,
            address_line2: true,
            sub_district: true,
            district: true,
            province: true,
            post_code: true,
          }
        });

        if(!response){
          set.status = 404;
          return { message: "Not found customer address." }
        }

        return response;
      }catch(error){
        set.status = 500;
        return { message : error };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        customeruser_id: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Delivery Address - Find by customeruser_id",
        description: `
          This endpoint find delivery address find by customeruser_id.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .post(
    "/monthly_order_count",
    async ({ headers, set }) => {
      try {
        const orderCount = await prisma.order_billing.count({
          where : {
            created_at: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
            }
          }
        });

        return { count: orderCount };
      }catch(error) {
        set.status = 500;
        return { message : error };
      }
    }
  )
  .post(
    "/order-submit",
    async ({ headers, body, set }) => {
      try {
        const toDateTime = (value?: string | null) => (value ? new Date(value) : null);
        const toDate = (value?: string | null) => (value ? new Date(value) : null);

        const result = await prisma.$transaction(async (tx) => {
          const createdOrders: Array<{
            order_billing_id: number;
            order_no: string;
            invoice_no: string | null;
          }> = [];

          for (const entry of body.order_billing) {
            const detail = entry.billing_detail;

            const createdBilling = await tx.order_billing.create({
              data: {
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
              },
              select: {
                id: true,
              },
            });

            if (detail.order_items.length > 0) {
              await tx.order_billing_items.createMany({
                data: detail.order_items.map((item) => ({
                  order_billing_id: createdBilling.id,
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
                  is_free: item.is_free,
                  promotion_from_product_option_id: item.promotion_from_product_option_id,
                })),
              });
            }

            if (detail.voucher_usage.length > 0) {
              await tx.order_billing_voucher_usage.createMany({
                data: detail.voucher_usage.map((voucher) => ({
                  order_billing_id: createdBilling.id,
                  gift_voucher_code: voucher.gift_voucher_code,
                  promotion_id: voucher.promotion_id,
                  usaged_at: toDateTime(voucher.usaged_at),
                })),
              });
            }


            createdOrders.push({
              order_billing_id: createdBilling.id,
              order_no: detail.order_no,
              invoice_no: body.payment_2c2p.invoiceNo,
            });
          }

          await tx.order_billing_payment.create({
            data: {
              invoice_no: body.payment_2c2p.invoiceNo,
              merchant_id: body.payment_2c2p.merchantID,
              description: null,
              amount: body.payment_2c2p.amount,
              currency_code: body.payment_2c2p.currencyCode,
              payment_channel_code: body.payment_2c2p.channelCode,
              payment_agent_code: body.payment_2c2p.agentCode,
              response_url: null,
              backend_url: null,
            },
          });

          await tx.order_billing_payment_response.create({
            data: {
              invoice_no: body.payment_2c2p.invoiceNo,
              amount: body.payment_2c2p.amount,
              currency_code: body.payment_2c2p.currencyCode,
              tran_ref: body.payment_2c2p.tranRef,
              reference_no: body.payment_2c2p.referenceNo,
              payment_agent_code: body.payment_2c2p.agentCode,
              payment_channel_code: body.payment_2c2p.channelCode,
              approval_code: body.payment_2c2p.approvalCode,
              datetime: toDateTime(body.payment_2c2p.dateTime),
              response_code: body.payment_2c2p.respCode,
              response_description: body.payment_2c2p.respDesc,
              card_info: body.payment_2c2p.cardInfo,
            },
          });

          return createdOrders;
        });

        return {
          message: "Order submit success",
          data: result,
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        order_billing: t.Array(
          t.Object({
            billing_detail: t.Object({
              order_no: t.String(),
              payment_invoice_no: t.String(),
              buyer_customeruser_id: t.String(),
              payment_method: t.Nullable(t.String()),
              order_status: t.Nullable(t.String()),
              admin_verify_status: t.Optional(t.Nullable(t.String())),
              im_no: t.Nullable(t.String()),
              order_type: t.Nullable(t.String()),
              invoice_id: t.Nullable(t.Number()),
              shipping_address_id: t.Nullable(t.Number()),
              payment_status: t.Nullable(t.String()),
              log_payment: t.Nullable(t.String()),
              order_uuid: t.Nullable(t.String()),
              created_at: t.String(),
              updated_at: t.String(),
              admin_updated_by: t.Nullable(t.String()),
              admin_updated_at: t.Nullable(t.String()),
              order_created_by: t.Nullable(t.String()),
              contact_id: t.Nullable(t.Number()),
              company_id: t.Nullable(t.Number()),
              credit_term_days: t.Nullable(t.Number()),
              credit_payment_duedate: t.Nullable(t.String()),
              shipping_cost: t.Nullable(t.Number()),
              order_items: t.Array(
                t.Object({
                  product_option_id: t.Nullable(t.Number()),
                  order_product_quantity: t.Nullable(t.Number()),
                  item_status: t.Nullable(t.String()),
                  mr_code: t.Nullable(t.String()),
                  location_code: t.Nullable(t.String()),
                  product_owner: t.Nullable(t.String()),
                  expire_date: t.Nullable(t.String()),
                  lot_number: t.Nullable(t.String()),
                  order_price: t.Nullable(t.Number()),
                  sale_price: t.Nullable(t.Number()),
                  waiting_out_quantity: t.Nullable(t.Number()),
                  admin_updated_by: t.Nullable(t.String()),
                  admin_updated_at: t.Nullable(t.String()),
                  is_free: t.Boolean(),
                  promotion_from_product_option_id: t.Nullable(t.Number()),
                })
              ),
              voucher_usage: t.Array(
                t.Object({
                  gift_voucher_code: t.Nullable(t.String()),
                  promotion_id: t.Nullable(t.Number()),
                  usaged_at: t.Nullable(t.String()),
                })
              ),
            }),
          })
        ),
        payment_2c2p: t.Object({
          merchantID: t.Nullable(t.String()),
          invoiceNo: t.String(),
          amount: t.Nullable(t.Number()),
          currencyCode: t.Nullable(t.String()),
          tranRef: t.Nullable(t.String()),
          referenceNo: t.Nullable(t.String()),
          agentCode: t.Nullable(t.String()),
          channelCode: t.Nullable(t.String()),
          approvalCode: t.Nullable(t.String()),
          dateTime: t.Nullable(t.String()),
          respCode: t.Nullable(t.String()),
          respDesc: t.Nullable(t.String()),
          cardInfo: t.Any(),
        }),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Order Submit",
        description: `Create order_billing, items, voucher usage, payment request, and payment response from one payload.`,
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/order-billing",
    async({headers, set}) => {
      try{
        const response = await prisma.order_billing.findMany({
          select: {
            id: true,
            order_no: true,
            buyer_customeruser_id: true,
            payment_method_id: true,
            order_status: true,
            im_no: true,
            order_type: true,
            invoice_id: true,
            shipping_address_id: true,
            payment_status: true,
            log_payment: true,
            order_uuid: true,
            created_at: true,
            updated_at: true,
            admin_updated_by: true,
            admin_updated_at: true,
            order_created_by: true,
            contact_id: true,
            company_id: true,
            credit_term_days: true,
            credit_payment_duedate: true,
            shipping_cost: true,
          }
        });

        if(!response){
          set.status = 404;
          return { message: "Not found order billings."}
        }

        return response
      }catch(error){
        set.status = 500;
        return { message : error };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Order Billing - Find All",
        description: `Find all order billings.`,
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )