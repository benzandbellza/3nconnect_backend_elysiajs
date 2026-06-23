import { Elysia, replaceUrlPath, t } from "elysia";
import { prisma } from "./prisma_connection";
import { auth } from "../plugins/auth";
import "dotenv/config";
import { customer_address } from "../../prisma/prismabox/barrel";

const now: Date = new Date();
// const utc7: Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

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