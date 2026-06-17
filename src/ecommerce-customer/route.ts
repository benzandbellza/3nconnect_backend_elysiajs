import { Elysia, t } from "elysia";
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