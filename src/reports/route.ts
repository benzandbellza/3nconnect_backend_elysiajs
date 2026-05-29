import { Elysia, t } from "elysia";
import { prisma } from "./prisma_connection";
import { auth } from "../plugins/auth";
import "dotenv/config";

const now: Date = new Date();
// const utc7: Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

export const reportsRoute = new Elysia({
  prefix: "/api/ecommerce-reports",
})
  .use(auth())
  .get(
    "/flashsale/products-list",
    async({ headers, set })=>{
      try {
        const response = await prisma.vw_flashsale_products_list.findMany({
          where: {
            promotion_start: {
              lte: now,
            },
            promotion_end: {
              gte: now,
            },
          },
          select: {
            promotion_name: true,
            company_name: true,
            brand_name: true,
            category_name: true,
            mat_identity: true,
            product_name: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            promotion_start: true,
            promotion_end: true,
          }
        })
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting customers:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Report - Flash Sale Products List",
        description: `
          This endpoint gets all flash sale products in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3N BackOffice - Reports"],
      },
    }
  )
  .get(
    "/discount/products-list",
    async({ headers, set })=>{
      try {
        const response = await prisma.vw_discount_products_list.findMany({
          where: {
            promotion_start: {
              lte: now,
            },
            promotion_end: {
              gte: now,
            },
          },
          select: {
            promotion_name: true,
            company_name: true,
            brand_name: true,
            category_name: true,
            mat_identity: true,
            product_name: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            promotion_start: true,
            promotion_end: true,
          }
        })
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting customers:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Report - Discount Products List",
        description: `
          This endpoint gets all discount products in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3N BackOffice - Reports"],
      },
    }
  )
  