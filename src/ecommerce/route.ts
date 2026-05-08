import { Elysia, t } from "elysia";
import { prisma } from './prisma_connection'
import { auth } from "../plugins/auth";
import "dotenv/config";

const now: Date = new Date();
// const utc7: Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

export const ecommerceRoute = new Elysia({
    prefix: "/api/ecommerce",
})
  .use(auth())
  .get(
    "/brands",
    async ({ headers }) => {
      try {
        const response = await prisma.brands.findMany();

        if (!response) {
          throw new Error("No valid brands found");
        }
        return response;
      } catch (error) {
        console.error("Error fetching valid brands:", error);
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Brands - Find All",
        description: `
          This endpoint retrieves all valid brands in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/brands",
    async ({ headers, body }) => {
      try {
        const { brand_image, url_image, brand_name, country_id, is_active } = body;
        const response = await prisma.brands.create({
          data: {
            brand_image : brand_image,
            url_image : url_image,
            brand_name : brand_name,
            country_id : country_id,
            is_active : is_active,
            created_at : now,
          },
        });
        return response;
      } catch (error) {
        console.error("Error creating brand:", error);
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        brand_image: t.Any(),
        url_image: t.Any(),
        brand_name: t.String(),
        country_id: t.Any(),
        is_active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Brands - Create",
        description: `
          This endpoint creates a new brand in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/brands/:brand_id",
    async ({ headers, params, body }) => {
      try {
        const { brand_id } = params;
        const { brand_image, url_image, brand_name, country_id, is_active } = body;
        const response = await prisma.brands.update({
          where: {
            id: Number(brand_id),
          },
          data: {
            brand_image : brand_image,
            url_image : url_image,
            brand_name : brand_name,
            country_id : country_id,
            is_active : is_active,
            updated_at : now,
          },
        });
        return response;
      } catch (error) {
        console.error("Error updating brand:", error);
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),  
      }),
      params: t.Object({
        brand_id: t.String(),
      }),
      body: t.Object({
        brand_image: t.Any(),
        url_image: t.Any(),
        brand_name: t.String(),
        country_id: t.Any(),
        is_active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Brands - Update",
        description: `
          This endpoint updates a brand in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      }
    }
  )
  .delete(
    "/brands/:brand_id",
    async ({ headers, params }) => {
      try {
        const { brand_id } = params;
        const response = await prisma.brands.delete({
          where: {
            id: Number(brand_id),
          },
        });
        return response;
      } catch (error) {
        console.error("Error deleting brand:", error);
      } 
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        brand_id: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Brands - Delete",
        description: `
          This endpoint deletes a brand in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
