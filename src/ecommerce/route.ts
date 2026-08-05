import { Elysia, replaceUrlPath, t } from "elysia";
import { prisma } from "./prisma_connection";
import { allocateNextOrderNumber } from "./order-number";
import {
  mapImGoodsToOrderItemResponse,
  mapOrderItemToImGoods,
  normalizeBuyerCustomerUserId,
} from "./order-mapping";
import { mapEventTierFields } from "./event-tier-mapping";
import { auth } from "../plugins/auth";
import "dotenv/config";
import { GoTrueAdminApi, GoTrueClient } from "@supabase/supabase-js";

const now: Date = new Date();
// const utc7: Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

const parseNullableDate = (value?: string | null) => {
  if (!value || value === "-" || value === "0") return null;

  const slashDateMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (slashDateMatch) {
    const [, dd, mm, yyyy] = slashDateMatch;
    const christianYear =
      Number(yyyy) > 2400 ? Number(yyyy) - 543 : Number(yyyy);
    return new Date(`${christianYear}-${mm}-${dd}`);
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const parseNullableDateTime = (value?: string | null) => {
  if (!value || value === "-" || value === "0") return null;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const mapAdminVerifyStatusToOrderStatus = (status?: string | null) => {
  if (status === "Pending" || status === "Paid" || status === "Approved")
    return "Open";
  if (status === "Cancelled") return "Cancelled";
  if (status === "Tranferring") return "Tranferring";
  if (status === "Completed") return "Completed";
  return "Processing";
};

export const ecommerceRoute = new Elysia({
  prefix: "/api/ecommerce",
})
  .use(auth())
  .get(
    "/customers/pdpa-accepted",
    async({ headers, set })=>{
      try {
        const response = await prisma.vw_customer_information.findMany({
          where : {
            pdpa_accepted: true,
          },
          select: {
            user_id: true,
            auth_id: true,
            member_no: true,
            gender: true,
            prefix_th: true,
            fullname_th: true,
            email: true,
            birthday: true,
            phone_no: true,
            tier: true,
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
        summary: "Customer Users - PDPA Accepted",
        description: `
          This endpoint gets all customer users who have accepted PDPA in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/brands",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_brands.findMany({
          select : {
            id: true,
            brand_image: true,
            url_image: true,
            brand_name: true,
            is_active: true,
            created_at: true,
            country_id: true,
            countries: {
              select: {
                country_name: true,
              }
            }
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid brands found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching brands:", error);
        return { message: errorMessage };
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
  .get(
    "/brands/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_brands.findMany({
          where: {
            is_active: true,
          },
          select: {
            id: true,
            brand_name: true,
          },
          orderBy: {
            brand_name: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid brands found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching brands:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Brands - Find Active",
        description: `
          This endpoint retrieves all active brands in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/brands",
    async ({ headers, body, set }) => {
      try {
        const { brand_image, url_image, brand_name, country_id } = body;
        
        const response = await prisma.public_brands.create({
          data: {
            brand_image: brand_image ?? null,
            url_image: url_image ?? null,
            brand_name: brand_name,
            country_id: country_id === null ? null : Number(country_id),
            is_active: true,
            created_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create brand" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating brand:", error);
        return { message: errorMessage };
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
    async ({ headers, params, body, set }) => {
      try {
        const { brand_id } = params;
        const { brand_image, url_image, brand_name, country_id, is_active } =
          body;
        const response = await prisma.public_brands.update({
          where: {
            id: Number(brand_id),
          },
          data: {
            brand_image: brand_image,
            url_image: url_image,
            brand_name: brand_name,
            country_id: country_id,
            is_active: is_active,
            updated_at: now.toISOString(),
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update brand" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating brand:", error);
        return { message: errorMessage };
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
      },
    },
  )
  .delete(
    "/brands/:brand_id",
    async ({ headers, params, set }) => {
      try {
        const { brand_id } = params;
        const response = await prisma.public_brands.delete({
          where: {
            id: brand_id,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Brand not found" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting brand:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        brand_id: t.Number(),
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
  .get(
    "/product-categories",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_product_categories.findMany({
          where: { level: { not: null } },
          select: { id: true, name: true, slug: true, parent_id: true, level: true },
          orderBy: {
            id: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid product categories found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching product categories:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Product Categories - Find All",
        description: `
          This endpoint retrieves all valid product categories in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/product-categories/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_product_categories.findMany({
          where: { is_active: true, level: { not: null } },
          select: { id: true, name: true, slug: true, parent_id: true, level: true },
          orderBy: {
            id: "asc",
          }, 
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid product categories found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching product categories:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Product Categories - Find All Active",
        description: `
          This endpoint retrieves all active product categories in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/product-categories",
    async ({ headers, body, set }) => {
      try {
        const { name, slug, parent_id } = body;

        if (!parent_id) {
          // Added new category with level 0
          const countLevel = await prisma.public_product_categories.count({
            where: {
              level: 0,
            },
          });

          await prisma.public_product_categories.create({
            data: {
              id: `cat_00${countLevel + 1}`,
              name: name,
              slug: slug,
              level: 0,
              is_active: true,
              created_at: now,
            },
          });
        } else {
          // Added new category with level 1 or level 2
          const parentCategory = await prisma.public_product_categories.findUnique({
            where: {
              id: parent_id,
            },
          });

          if (!parentCategory) {
            set.status = 400;
            return { message: "Parent productcategory not found" };
          }

          const level = (parentCategory.level ?? 0) + 1;
          const countLevel = await prisma.public_product_categories.count({
            where: {
              level: level,
            },
          });

          await prisma.public_product_categories.create({
            data: {
              id: `cat_${level}1${countLevel + 1}`,
              name: name,
              slug: slug,
              parent_id: parent_id,
              ancestors: Array.isArray(parentCategory.ancestors)
                ? [...parentCategory.ancestors, parent_id]
                : [parent_id],
              level: level,
              is_active: true,
              created_at: now,
            },
          });
        }

        return { message: "Product category created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating product category:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        name: t.String(),
        parent_id: t.Any(),
        slug: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Product Categories - Create",
        description: `
          This endpoint creates a new product category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/product-categories/:category_id",
    async ({ headers, params, body, set }) => {
      try {
        const { category_id } = params;
        const { name, slug, parent_id, is_active } = body;

        const category = await prisma.public_product_categories.findUnique({
          where: {
            id: category_id,
          },
        });

        if (!category) {
          set.status = 404;
          return { message: "Product category not found" };
        }

        await prisma.public_product_categories.update({
          where: {
            id: category_id,
          },
          data: {
            name: name,
            slug: slug,
            parent_id: parent_id,
            is_active: is_active,
            updated_at: now.toISOString(),
          },
        });

        return { message: "Product category updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating product category:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        category_id: t.String(),
      }),
      body: t.Object({
        name: t.String(),
        parent_id: t.Any(),
        slug: t.String(),
        is_active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Product Categories - Update",
        description: `
          This endpoint updates a product category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/product-categories/:category_id",
    async ({ headers, params, set }) => {
      try {
        const { category_id } = params;

        const category = await prisma.public_product_categories.findUnique({
          where: {
            id: category_id,
          },
        });

        if (!category) {
          set.status = 404;
          return { message: "Product category not found" };
        }

        await prisma.public_product_categories.delete({
          where: {
            id: category_id,
          },
        });

        return { message: "Product category deleted successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting product category:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        category_id: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Product Categories - Delete",
        description: `
          This endpoint deletes a product category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/companies",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_companies.findMany({
          orderBy: {
            name: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid companies found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching companies:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Companies - Find All",
        description: `
          This endpoint retrieves all valid companies in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/companies/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_companies.findMany({
          where: {
            active: true,
          },
          select: {
            id: true,
            name: true,
          },
          orderBy: {
            name: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid companies found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching companies:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Companies - Find Active",
        description: `
          This endpoint retrieves all active companies in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/companies",
    async ({ headers, body, set }) => {
      try {
        const { company_image, url_image, name, active } = body;
        const response = await prisma.public_companies.create({
          data: {
            companypic: company_image,
            url_image: url_image,
            name: name,
            active: active,
            created_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create company" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating company:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        company_image: t.Any(),
        url_image: t.Any(),
        name: t.String(),
        active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Companies - Create",
        description: `
          This endpoint creates a new company in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/companies/:company_id",
    async ({ headers, params, body, set }) => {
      try {
        const { company_id } = params;
        const { company_image, url_image, name, active } = body;
        const response = await prisma.public_companies.update({
          where: {
            id: Number(company_id),
          },
          data: {
            companypic: company_image,
            url_image: url_image,
            name: name,
            active: active,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update company" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating company:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        company_id: t.String(),
      }),
      body: t.Object({
        company_image: t.Any(),
        url_image: t.Any(),
        name: t.String(),
        active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Companies - Update",
        description: `
          This endpoint updates a company in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/companies/:company_id",
    async ({ headers, params, set }) => {
      try {
        const { company_id } = params;
        const response = await prisma.public_companies.delete({
          where: {
            id: company_id,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Company not found" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting company:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        company_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Companies - Delete",
        description: `
          This endpoint deletes a company in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )

  .get(
    "/countries",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_countries.findMany({
          orderBy: {
            country_name: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid countries found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching countries:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Countries - Find All",
        description: `
          This endpoint retrieves all valid countries in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/countries/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_countries.findMany({
          where: {
            is_active: true,
          },
          select: {
            id: true,
            country_name: true,
            short_name: true,
          },
          orderBy: {
            country_name: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid countries found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching countries:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Countries - Find Active",
        description: `
          This endpoint retrieves all active countries in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/countries",
    async ({ headers, body, set }) => {
      try {
        const { country_name, short_name } = body;
        const response = await prisma.public_countries.create({
          data: {
            country_name: country_name,
            short_name: short_name || null,
            is_active: true,
            created_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create country" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating country:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        country_name: t.String(),
        short_name: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Countries - Create",
        description: `
          This endpoint creates a new country in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/countries/:country_id",
    async ({ headers, params, body, set }) => {
      try {
        const { country_id } = params;
        const { country_name, short_name, is_active } = body;
        const response = await prisma.public_countries.update({
          where: {
            id: Number(country_id),
          },
          data: {
            country_name: country_name,
            short_name: short_name || null,
            is_active: is_active,
            updated_at: now.toISOString(),
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update country" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating country:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        country_id: t.String(),
      }),
      body: t.Object({
        country_name: t.String(),
        short_name: t.Any(),
        is_active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Countries - Update",
        description: `
          This endpoint updates a country in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/countries/:country_id",
    async ({ headers, params, set }) => {
      try {
        const { country_id } = params;
        const response = await prisma.public_countries.delete({
          where: {
            id: Number(country_id),
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Country not found" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting country:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        country_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Countries - Delete",
        description: `
          This endpoint deletes a country in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/products",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_products.findMany({
          select: {
            id: true,
            product_name: true,
            is_active: true,
            is_online_active: true,
            unit: true,
            created_at: true,
            updated_at: true,
            brand_id: true,
            company_id: true,
            category_id: true,
            brands: {
              select: {
                brand_name: true,
              },
            },
            product_categories: {
              select: {
                name: true,
              },
            },
            companies: {
              select: {
                name: true,
              },
            },
            is_pre_order: true,
            is_custom_options: true,
            product_options: {
              select: {
                id: true,
                mat_identity: true,
                option_name: true,
                online_price: true,
                min_price: true,
                is_stock: true,
              },
              orderBy: {
                row_no: "asc",
              },
            },
            product_payment_method: {
              select: {
                id: true,
                product_id: true,
                payment_method_id: true,
                payment_methods: {
                  select: {
                    id: true,
                    name: true,
                    icon: true,
                    icon_color: true,
                    is_active: true,
                    sort_order: true,
                    image_url: true,
                    category: true,
                  },
                },
              },
            },
            product_images: {
              where: {
                is_show: true
              },
              select: {
                url_image: true,
              }
            }
          },
          orderBy : {
            product_name: "asc"
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching products:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Find All",
        description: `
          This endpoint retrieves all valid products in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/products/planetone-stock",
    async ({ headers, set }) => {
      try {
        // Get paginated data
        const response = await prisma.vw_sync_stock_ecommerce.findMany();

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching products:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products PlanetOne Stock - Find All",
        description: `
          This endpoint retrieves PlanetOne stock products with server-side pagination, search, and sorting.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    },
  )
  .get(
    "/products/planetone-stock/paginator",
    async ({ headers, set, query }) => {
      try {
        const {
          limit = 50,
          offset = 0,
          search = '',
          sort_by = 'mat_unit_identity',
          sort_dir = 'asc',
          online_status = 'all',
          company_name = '',
          mat_status = '',
        } = query;

        // Build where clause
        const whereClause: any = {};

        if (search) {
          whereClause.OR = [
            { mat_unit_identity: { contains: search, mode: 'insensitive' } },
            { mat_name: { contains: search, mode: 'insensitive' } },
            { mat_category_text: { contains: search, mode: 'insensitive' } },
          ];
        }

        if (online_status !== 'all') {
          if(online_status === "online"){
            whereClause.is_online_status = true;
          }else{
            whereClause.is_online_status = false;
          }
        }

        if (company_name !== 'All') {
          whereClause.company_name = { contains: company_name, mode: 'insensitive' };
        }

        if (mat_status) {
          whereClause.mat_status = mat_status;
        }

        // Get total count
        const total = await prisma.vw_sync_stock_ecommerce.count({
          where: whereClause,
        });

        // Get paginated data
        const response = await prisma.vw_sync_stock_ecommerce.findMany({
          where: whereClause,
          select: {
            mat_unit_identity: true,
            mat_name: true,
            mat_category_text: true,
            mat_qty_unit: true,
            mat_status: true,
            is_online_status: true,
            is_stock: true,
            company_id: true,
            company_name: true,
            online_price: true,
            min_price: true,
            sale_option_name: true,
            attributes_hierarchy: true,
          },
          orderBy: {
            [sort_by]: sort_dir,
          },
          skip: Number(offset),
          take: Number(limit),
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }

        return {
          data: response,
          pagination: {
            total,
            limit: Number(limit),
            offset: Number(offset),
            total_pages: Math.ceil(total / Number(limit)),
          },
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching products:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      query: t.Object({
        limit: t.Optional(t.Number({ default: 50 })),
        offset: t.Optional(t.Number({ default: 0 })),
        search: t.Optional(t.String({ default: '' })),
        sort_by: t.Optional(t.String({ default: 'mat_unit_identity' })),
        sort_dir: t.Optional(t.String({ default: 'asc' })),
        online_status: t.Optional(t.String({ default: 'all' })),
        company_name: t.Optional(t.String({ default: '' })),
        mat_status: t.Optional(t.String({ default: '' })),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products PlanetOne Stock - Find by Paginator",
        description: `
          This endpoint retrieves PlanetOne stock products with server-side pagination, search, and sorting.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    },
  )
  .patch(
    "/products/planetone-stock/:mat_unit_identity",
    async ({ params, body, set }) => {
      try {
        const { mat_unit_identity } = params;
        
        const response = await prisma.public_product_options.updateMany({
          where: {
            mat_identity: mat_unit_identity,
          },
          data: body
        });

        if(!response){
          set.status = 404;
          return { message : "Failed to patch planetone stock" }
        }

        return { message : "patch successfully."};
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating product:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        mat_unit_identity: t.String(),
      }),
      body: t.Object({
        min_price: t.Optional(t.Any()),
        is_stock: t.Optional(t.Boolean()),
        attributes_hierarchy: t.Optional(t.Array(t.Any())),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - PlanetOne Stock",
        description: `
          This endpoint updates PlanetOne stock products with server-side pagination, search, and sorting.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/payment-method/online-active",
    async({ headers, set}) => {
      try{
        const response = await prisma.payment_methods.findMany({
          where : {
            short_code : {
              not: null
            },
            is_active: true
          },
          select: {
            id: true,
            name: true,
            short_code: true,
          },
          orderBy: {
            sort_order: "asc"
          }
        });

        if(!response){
          set.status = 404
          return { message : "Failed to get payment method" }
        }

        return response;
      }catch (error) {
        set.status=500
        return {message : error}
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Payment Method - Find All Online Active",
        description: `
          This endpoint retrieves all payment method online active in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/products/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_products.findMany({
          where: {
            is_active: true,
            is_online_active: true,
          },
          select: {
            id: true,
            product_name: true,
            product_description: true,
            unit: true,
            brands: {
              select: {
                brand_name: true,
              },
            },
            product_categories: {
              select: {
                name: true,
              },
            },
            companies: {
              select: {
                name: true,
              },
            },
            video_product: true,
            condition_description: true,
            warranty_description: true,
            youtube_url: true,
            is_pre_order: true,
            is_custom_options: true,
            product_options: {
              select: {
                id: true,
                mat_identity: true,
                option_name: true,
                online_price: true,
                min_price: true,
              },
              orderBy: {
                row_no: "asc",
              },
            },
            product_payment_method: {
              select: {
                id: true,
                product_id: true,
                payment_method_id: true,
                payment_methods: {
                  select: {
                    id: true,
                    name: true,
                    icon: true,
                    icon_color: true,
                    is_active: true,
                    sort_order: true,
                    image_url: true,
                    category: true,
                  },
                },
              },
            },
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching products:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Find All",
        description: `
          This endpoint retrieves all valid products in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/products/:product_id",
    async ({ headers, params, set }) => {
      try {
        const response = await prisma.public_products.findFirst({
          where: {
            id: params.product_id,
          },
          select: {
            id: true,
            product_name: true,
            product_description: true,
            unit: true,
            brand_id: true,
            company_id: true,
            category_id: true,
            video_product: true,
            condition_description: true,
            warranty_description: true,
            youtube_url: true,
            is_active: true,
            is_online_active: true,
            is_pre_order: true,
            is_custom_options: true,
            product_images: {
              select: {
                id: true,
                url_image: true,
                is_show: true,
              },
              orderBy: {
                is_show: "desc",
              },
            },
            product_options: {
              select: {
                id: true,
                mat_identity: true,
                option_name: true,
                online_price: true,
                min_price: true,
                attributes_hierarchy: true,
              },
              orderBy: {
                row_no: "asc",
              },
            },
            product_payment_method: {
              select: {
                id: true,
                product_id: true,
                payment_method_id: true,
                payment_methods: {
                  select: {
                    id: true,
                    name: true,
                    icon: true,
                    icon_color: true,
                    is_active: true,
                    sort_order: true,
                    image_url: true,
                    category: true,
                  },
                },
              },
            },
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching product:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        product_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Find All",
        description: `
          This endpoint retrieves all valid products in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/products",
    async ({ headers, body, set }) => {
      try {
        const {
          brand_id,
          category_id,
          company_id,
          images,
          is_active,
          is_custom_options,
          is_online_active,
          is_pre_order,
          options,
          payment_methods,
          product_description,
          product_name,
          unit,
          video_product,
          condition_description,
          warranty_description,
          youtube_url,
        } = body;

        // TODO : check options.mat_id do not repeat in company
        const count = await prisma.public_products.count({
          where: {
            company_id: company_id,
            product_options: {
              some: {
                mat_identity: {
                  in: options.map((option) => option.mat_id),
                },
              },
            },
          },
        });

        if (count > 0) {
          set.status = 400;
          return { message: "Product with same mat_id already exists" };
        }

        const get_category = await prisma.public_product_categories.findUnique({
          where: {
            id: category_id,
          },
          select: {
            id: true,
            ancestors: true,
          },
        });

        if (!get_category) {
          set.status = 400;
          return { message: "Category not found" };
        }

        const category_hierarchy = Array.isArray(get_category.ancestors)
          ? [...get_category.ancestors, get_category.id]
          : [get_category.id];

        const response = await prisma.public_products.create({
          data: {
            brand_id: brand_id,
            category_id: category_id,
            company_id: company_id,
            condition_description: condition_description,
            is_active: is_active,
            is_custom_options: is_custom_options,
            is_online_active: is_online_active,
            is_pre_order: is_pre_order,
            product_description: product_description,
            product_name: product_name,
            unit: unit,
            video_product: video_product,
            warranty_description: warranty_description,
            youtube_url: youtube_url,
            category_hierarchy: category_hierarchy,
            created_at: now,
          },
          select: {
            id: true,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create product" };
        }

        if (images && images.length > 0) {
          await Promise.all(
            images.map((image: { image_url: string; is_main: boolean }) => {
              return prisma.public_product_images.create({
                data: {
                  product_id: response.id,
                  url_image: image.image_url,
                  is_show: image.is_main,
                  created_at: now,
                },
              });
            }),
          );
        }

        if (options && options.length > 0) {
          await Promise.all(
            options.map((option: any) => {
              return prisma.public_product_options.create({
                data: {
                  product_id: response.id,
                  row_no: option.row_no,
                  mat_identity: option.mat_id,
                  option_name: option.option_name,
                  online_price: option.online_price,
                  attributes_hierarchy: option.attribute_ids && option.attribute_ids.length > 0 ? option.attribute_ids : [],
                  created_at: now,
                },
              });
            }),
          );
        }

        if (payment_methods && payment_methods.length > 0) {
          await prisma.public_product_payment_method.createMany({
            data: payment_methods.map((paymentMethod) => ({
              product_id: response.id,
              payment_method_id: paymentMethod.payment_method_id,
              created_at: now,
            })),
          });
        }

        return { message: "Product created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating product:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        brand_id: t.Number(),
        category_id: t.String(),
        company_id: t.Number(),
        images: t.Any(),
        is_active: t.Boolean(),
        is_custom_options: t.Boolean(),
        is_online_active: t.Boolean(),
        is_pre_order: t.Boolean(),
        options: t.Array(
          t.Object({
            id: t.Optional(t.Number()),
            row_no: t.Number(),
            mat_id: t.String(),
            option_name: t.Any(),
            online_price: t.Any(),
            attribute_ids: t.Any(),
          }),
        ),
        payment_methods: t.Array(
          t.Object({
            payment_method_id: t.Number(),
            payment_method_type: t.String(),
          }),
        ),
        product_description: t.String(),
        product_name: t.String(),
        unit: t.String(),
        video_product: t.Any(),
        condition_description: t.Any(),
        warranty_description: t.Any(),
        youtube_url: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Create",
        description: `
          This endpoint creates a new product in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/products/:product_id",
    async ({ headers, params, body, set }) => {
      try {
        const { product_id } = params;
        const {
          brand_id,
          category_id,
          company_id,
          condition_description,
          images,
          is_active,
          is_custom_options,
          is_online_active,
          is_pre_order,
          options,
          payment_methods,
          product_description,
          product_name,
          unit,
          video_product,
          warranty_description,
          youtube_url,
        } = body;

        // TODO : check options.mat_id do not repeat in company not self
        const count = await prisma.public_products.count({
          where: {
            company_id: company_id,
            id: {
              not: product_id,
            },
            product_options: {
              some: {
                mat_identity: {
                  in: options.map((option) => option.mat_id),
                },
              },
            },
          },
        });

        if (count > 0) {
          set.status = 400;
          return { message: "Product with same mat_id already exists" };
        }

        const get_category = await prisma.public_product_categories.findUnique({
          where: {
            id: category_id,
          },
          select: {
            id: true,
            ancestors: true,
          },
        });

        if (!get_category) {
          set.status = 400;
          return { message: "Category not found" };
        }

        const category_hierarchy = Array.isArray(get_category.ancestors)
          ? [...get_category.ancestors, get_category.id]
          : [get_category.id];

        const response = await prisma.public_products.update({
          where: {
            id: product_id,
          },
          data: {
            brand_id: brand_id,
            category_id: category_id,
            category_hierarchy: category_hierarchy,
            company_id: company_id,
            condition_description: condition_description,
            is_active: is_active,
            is_custom_options: is_custom_options,
            is_online_active: is_online_active,
            is_pre_order: is_pre_order,
            product_description: product_description,
            product_name: product_name,
            unit: unit,
            video_product: video_product,
            warranty_description: warranty_description,
            youtube_url: youtube_url,
            updated_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update product" };
        }

        if (images && images.length > 0) {
          const existingImages = await prisma.public_product_images.findMany({
            where: { product_id: product_id },
            select: { id: true, url_image: true, is_show: true },
          });

          const imagesToAdd = images.filter((img: any) => !img.id);
          const imagesToUpdate = images.filter((img: any) => img.id);
          const imagesToDelete = existingImages.filter(
            (existing) => !images.some((img: any) => img.id === existing.id)
          );

          if (imagesToAdd.length > 0) {
            await Promise.all(
              imagesToAdd.map((image: { image_url: string; is_main: boolean }) =>
                prisma.public_product_images.create({
                  data: {
                    product_id: product_id,
                    url_image: image.image_url,
                    is_show: image.is_main,
                    created_at: now,
                  },
                })
              )
            );
          }

          if (imagesToUpdate.length > 0) {
            await Promise.all(
              imagesToUpdate.map((image: { id: number; image_url: string; is_main: boolean }) =>
                prisma.public_product_images.update({
                  where: { id: image.id },
                  data: {
                    url_image: image.image_url,
                    is_show: image.is_main,
                    updated_at: now.toISOString(),
                  },
                })
              )
            );
          }

          if (imagesToDelete.length > 0) {
            await prisma.public_product_images.deleteMany({
              where: {
                id: { in: imagesToDelete.map(img => img.id) },
              },
            });
          }
                    
        }

        // TODO : compare with existing product options and update/delete/add
        if (options && options.length > 0) {
          const existingOptions = await prisma.public_product_options.findMany({
            where: { product_id: product_id },
            select: { id: true, row_no: true, mat_identity: true, option_name: true, online_price: true, min_price: true },
          });

          const optionsToAdd = options.filter((opt: any) => !opt.id);
          const optionsToUpdate = options.filter((opt: any) => opt.id);
          const optionsToDelete = existingOptions.filter(
            (existing) => !options.some((opt: any) => opt.id === existing.id)
          );

          if (optionsToAdd.length > 0) {
            await Promise.all(
              optionsToAdd.map((option: any) =>
                prisma.public_product_options.create({
                  data: {
                    product_id: product_id,
                    row_no: option.row_no,
                    mat_identity: option.mat_id,
                    option_name: option.option_name,
                    online_price: option.online_price,
                    attributes_hierarchy: option.attribute_ids && option.attribute_ids.length > 0 ? option.attribute_ids : [],
                    created_at: now,
                  },
                })
              )
            );
          }

          if (optionsToUpdate.length > 0) {
            await Promise.all(
              optionsToUpdate.map((option: any) =>
                prisma.public_product_options.update({
                  where: { id: option.id },
                  data: {
                    row_no: option.row_no,
                    mat_identity: option.mat_id,
                    option_name: option.option_name,
                    online_price: option.online_price,
                    attributes_hierarchy: option.attribute_ids && option.attribute_ids.length > 0 ? option.attribute_ids : [],
                    updated_at: now,
                  },
                })
              )
            );
          }

          if (optionsToDelete.length > 0) {
            await prisma.public_product_options.deleteMany({
              where: {
                id: { in: optionsToDelete.map(opt => opt.id) },
              },
            });
          }
        }

        await prisma.public_product_payment_method.deleteMany({
          where: { product_id: response.id },
        });

        if (payment_methods.length > 0) {
          await prisma.public_product_payment_method.createMany({
            data: payment_methods.map((paymentMethod) => ({
              product_id: response.id,
              payment_method_id: paymentMethod.payment_method_id,
              created_at: now,
            })),
          });
        }

        return { message: "Product updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating product:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        product_id: t.Number(),
      }),
      body: t.Object({
        brand_id: t.Number(),
        category_id: t.String(),
        company_id: t.Number(),
        condition_description: t.Any(),
        images: t.Any(),
        is_active: t.Boolean(),
        is_custom_options: t.Boolean(),
        is_online_active: t.Boolean(),
        is_pre_order: t.Boolean(),
        options: t.Array(
          t.Object({
            id: t.Number(),
            row_no: t.Number(),
            mat_id: t.String(),
            option_name: t.Any(),
            online_price: t.Any(),
            attribute_ids: t.Any(),
          })
        ),
        payment_methods: t.Array(
          t.Object({
            payment_method_id: t.Number(),
            payment_method_type: t.String(),
          }),
        ),
        product_description: t.String(),
        product_name: t.String(),
        unit: t.String(),
        video_product: t.Any(),
        warranty_description: t.Any(),
        youtube_url: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Update",
        description: `
          This endpoint updates a product in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/products/:product_id/options-price/:product_options_id",
    async ({ headers, params, body, set }) => {
      try {
        const { product_id, product_options_id } = params;
        const { online_price } = body;
        
        const response = await prisma.public_product_options.update({
          where: {
            id: product_options_id,
          },
          data: {
            online_price: online_price,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update product price option" };
        }

        return { message: "Product price option updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating product price option:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        product_id: t.Number(),
        product_options_id: t.Number(),
      }),
      body: t.Object({
        online_price: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Update Price Option",
        description: `
          This endpoint updates a product price option in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/products/bulks/:product_id",
    async ({ headers, params, body, set }) => {
      try {
        const { product_id } = params;
        const {
          brand_id,
          category_id,
          company_id,
          is_online_active,
          payment_methods
        } = body;
        const get_category = await prisma.public_product_categories.findUnique({
          where: {
            id: category_id,
          },
          select: {
            id: true,
            ancestors: true,
          },
        });

        if (!get_category) {
          set.status = 400;
          return { message: "Category not found" };
        }

        const category_hierarchy = Array.isArray(get_category.ancestors)
          ? [...get_category.ancestors, get_category.id]
          : [get_category.id];

        const response = await prisma.public_products.update({
          where: {
            id: product_id,
          },
          data: {
            is_online_active: is_online_active,
            brand_id: brand_id,
            category_hierarchy: category_hierarchy,
            category_id: category_id,
            company_id: company_id,
            updated_at: now,
          },
          select : {
            id : true
          }
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update product" };
        }

        await prisma.public_product_payment_method.updateMany({
          where : {
            product_id: response.id
          },
          data : {
          }
        })

        return { message: "Product updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating product:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        product_id: t.Number(),
      }),
      body: t.Object({
        brand_id: t.Number(),
        category_id: t.String(),
        company_id: t.Number(),
        is_online_active: t.Boolean(),
        payment_methods: t.Object({
          qr_code_promptpay: t.Boolean(),
          visa_card: t.Boolean(),
          mobile_banking: t.Boolean(),
          credit_terms: t.Boolean(),
        }),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Bulk Update",
        description: `
          This endpoint bulk updates a product in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/products/:product_id",
    async ({ headers, params, set }) => {
      try {
        const { product_id } = params;
        const response = await prisma.public_products.delete({
          where: {
            id: Number(product_id),
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Product not found" };
        }

        await prisma.public_product_images.deleteMany({
          where: {
            product_id: Number(product_id),
          },
        });

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting product:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        product_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Delete",
        description: `
          This endpoint deletes a product in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/event-categories",
    async ({ headers, set }) => {
      try {
        const response = await prisma.event_categories.findMany({
          orderBy: {
            event_cate_name: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid event categories found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching event categories:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Event Categories - Find All",
        description: `
          This endpoint retrieves all valid event categories in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/event-categories/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.event_categories.findMany({
          where: {
            is_active: true,
          },
          orderBy: {
            event_cate_name: "asc",
          },
          select: {
            id: true,
            event_cate_name: true,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid event categories found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching event categories:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Event Categories - Find All",
        description: `
          This endpoint retrieves all valid event categories in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/event-categories",
    async ({ headers, body, set }) => {
      try {
        const { event_cate_name } = body;

        const response = await prisma.event_categories.create({
          data: {
            event_cate_name: event_cate_name,
            is_active: true,
            created_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create event category" };
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating event category:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        event_cate_name: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Event Categories - Create",
        description: `
          This endpoint creates a new event category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/events",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_events.findMany({
          select: {
            id: true,
            eventname: true,
            event_detail: true,
            event_registerdate: true,
            event_preregister: true,
            eventStartDate: true,
            event_pic: true,
            location: true,
            tierregister: true,
            tierpreregister: true,
            eventEndDate: true,
            link: true,
            event_category_id: true,
          },
          orderBy: {
            eventname: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid events found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching events:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Events - Find All",
        description: `
          This endpoint retrieves all valid events in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/events",
    async ({ headers, body, set }) => {
      try {
        const {
          event_category_id,
          event_detail,
          event_enddate,
          event_image,
          event_name,
          event_startdate,
          location_name,
          preregister_date,
          ref_url,
          register_date,
          tier_preregister,
          tier_register,
        } = body;
        const response = await prisma.public_events.create({
          data: {
            eventname: event_name,
            event_detail: event_detail,
            eventEndDate: event_enddate.toISOString(),
            event_pic: event_image,
            eventStartDate: event_startdate.toISOString(),
            location: location_name,
            event_preregister: preregister_date ? String(preregister_date) : null,
            link: ref_url ? String(ref_url) : null,
            event_registerdate: register_date ? String(register_date) : null,
            ...mapEventTierFields({ tier_preregister, tier_register }),
            created_at: now,
            event_category_id: event_category_id,
            is_active: true,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create event" };
        }

        return { message: "Event created successfully" };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        console.error("Error creating event:", errorMessage);
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        event_category_id: t.Number(),
        event_detail: t.String(),
        event_enddate: t.Date(),
        event_image: t.Any(),
        event_name: t.String(),
        event_startdate: t.Date(),
        location_name: t.String(),
        preregister_date: t.Any(),
        ref_url: t.Any(),
        register_date: t.Any(),
        tier_preregister: t.String(),
        tier_register: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Events - Create",
        description: `
          This endpoint creates a new event in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/events/:event_id",
    async ({ headers, params, body, set }) => {
      try {
        const { event_id } = params;
        const {
          event_category_id,
          event_detail,
          event_enddate,
          event_image,
          event_name,
          event_startdate,
          location_name,
          preregister_date,
          ref_url,
          register_date,
          tier_preregister,
          tier_register,
          is_active,
        } = body;
        const response = await prisma.public_events.update({
          where: {
            id: event_id,
          },
          data: {
            eventname: event_name,
            event_detail: event_detail,
            eventEndDate: event_enddate.toISOString(),
            event_pic: event_image,
            eventStartDate: event_startdate.toISOString(),
            location: location_name,
            event_preregister: preregister_date ? String(preregister_date) : null,
            link: ref_url ? String(ref_url) : null,
            event_registerdate: register_date ? String(register_date) : null,
            ...mapEventTierFields({ tier_preregister, tier_register }),
            is_active: is_active !== undefined ? is_active : true,
            event_category_id: event_category_id,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update event" };
        }

        return { message: "Event updated successfully" };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        console.error("Error updating event:", errorMessage);
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        event_id: t.String(),
      }),
      body: t.Object({
        event_category_id: t.Number(),
        event_detail: t.String(),
        event_enddate: t.Date(),
        event_image: t.String(),
        event_name: t.String(),
        event_startdate: t.Date(),
        location_name: t.String(),
        preregister_date: t.Any(),
        ref_url: t.Any(),
        register_date: t.Any(),
        tier_preregister: t.String(),
        tier_register: t.String(),
        is_active: t.Boolean(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Events - Update",
        description: `
          This endpoint updates an event in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/events/:event_id",
    async({headers, set, params}) => {
      try{ 
        const response = await prisma.public_events.delete({
          where: {
            id : params.event_id
          }
        })

        if(!response){
          set.status = 404
          return { message : "Failed to delete event."}
        }

        return {message : "Deleted event success."}
      } catch (error) {
        set.status = 500;
        return { message: error }
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        event_id: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Search Product - In Stock",
        description: `
          This endpoint searches for products in stock based on the search term provided in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/search-product/in-stock",
    async ({ headers, body, set }) => {
      try {
        const { search_text } = body;
        const response = await prisma.vw_planetone_grouping_stock.findMany({
          where: {
            MATUnit: {
              contains: search_text,
              mode: "insensitive",
            },
          },
          select: {
            MATUnit: true,
            grandqty: true,
            company: true,
          },
          orderBy: {
            MATUnit: "asc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No products in stock found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error searching products in stock:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        search_text: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Search Product - In Stock",
        description: `
          This endpoint searches for products in stock based on the search term provided in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/stock-inventory",
    async ({ headers, set }) => {
      try {
        const response = await prisma.vw_planetone_stocks.findMany();

        if (!response) {
          set.status = 404;
          return { message: "No inventory stock found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching inventory stocks:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Inventory Stocks - Find All",
        description: `
          This endpoint retrieves all inventory stocks in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/attribute-groups",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_attribute_groups.findMany({
          select : {
            id: true,
            attr_group_name: true,
            attr_group_description: true,
            is_active: true,
            attributes: {
              select: {
                id: true,
                attr_name: true,
                attr_description: true,
                is_active: true
              }
            }
          },
          orderBy: {
            attr_group_name: "asc",
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No attribute groups found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching attribute groups:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attribute Groups - Find All",
        description: `
          This endpoint retrieves all attribute groups in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/attribute-groups",
    async ({ headers, body,set }) => {
      try {
        const { attr_group_name, attr_group_description } = body;

        const response = await prisma.public_attribute_groups.create({
          data: {
            attr_group_name: attr_group_name,
            attr_group_description: attr_group_description,
            is_active: true,
            created_at: now,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No attribute groups found" };
        }

        return { message: "Attribute group created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating attribute groups:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        attr_group_name: t.String(),
        attr_group_description: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attribute Groups - Create",
        description: `
          This endpoint creates a new attribute group in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/attribute-parents/active",
    async ({ headers, set }) => {
      try {
        
        const response = await prisma.public_attribute_groups.findMany({
          where: {
            is_active: true,
          },
          select : {
            attr_group_name: true,
            attr_group_description: true,
            attributes: {
              where : {
                is_active: true
              },
              select: {
                id: true,
                attr_name: true,
                attr_description: true,
              }
            }
          },
          orderBy: {
            attr_group_name: "asc",
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No attribute groups found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching attribute groups:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attribute Groups - Find Parents Active",
        description: `
          This endpoint retrieves all active attribute groups in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/attribute-groups/:attr_group_id",
    async ({ headers, body, params, set }) => {
      try {
        const { attr_group_name, attr_group_description, is_active } = body;
        const { attr_group_id } = params;

        const response = await prisma.public_attribute_groups.update({
          where: {
            id: attr_group_id
          },
          data: {
            attr_group_name: attr_group_name,
            attr_group_description: attr_group_description,
            is_active: is_active
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No attribute groups found" };
        }

        return { message: "Attribute group updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating attribute groups:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        attr_group_name: t.String(),
        attr_group_description: t.String(),
        is_active: t.Boolean(),
      }),
      params: t.Object({
        attr_group_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attribute Groups - Update",
        description: `
          This endpoint updates an existing attribute group in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/attribute-groups/:attr_group_id",
    async ({ headers, params, set }) => {
      try {
        const { attr_group_id } = params;

        const response = await prisma.public_attribute_groups.delete({
          where: {
            id: attr_group_id
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No attribute groups found" };
        }

        return { message: "Attribute group deleted successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting attribute groups:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        attr_group_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attribute Groups - Delete",
        description: `
          This endpoint deletes an existing attribute group in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/attributes",
    async ({ headers, body, set }) => {
      try {
        const { attr_name, attr_description, attr_group_id } = body;

        const response = await prisma.public_attributes.create({
          data: {
            attr_name: attr_name,
            attr_description: attr_description,
            attr_group_id: attr_group_id,
            is_active: true,
            created_at: now,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No attributes found" };
        }

        return { message: "Attribute created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating attributes:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        attr_name: t.String(),
        attr_description: t.String(),
        attr_group_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attributes - Create",
        description: `
          This endpoint creates a new attribute in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/attributes/:attr_id",
    async ({ headers, body, params, set }) => {
      try {
        const { attr_name, attr_description, is_active } = body;
        const { attr_id } = params;

        const response = await prisma.public_attributes.update({
          where: {
            id: attr_id
          },
          data: {
            attr_name: attr_name,
            attr_description: attr_description,
            is_active: is_active
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No attributes found" };
        }

        return { message: "Attribute updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating attributes:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        attr_name: t.String(),
        attr_description: t.String(),
        is_active: t.Boolean(),
      }),
      params: t.Object({
        attr_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attributes - Update",
        description: `
          This endpoint updates an existing attribute in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .delete(
    "/attributes/:attr_id",
    async ({ headers, params, set }) => {
      try {
        const { attr_id } = params;

        const response = await prisma.public_attributes.delete({
          where: {
            id: attr_id
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No attributes found" };
        }

        return { message: "Attribute deleted successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting attributes:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        attr_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Attributes - Delete",
        description: `
          This endpoint deletes an existing attribute in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/promotions",
    async ({ headers, set, body}) => {
      try {
        const { promotion_type } = body;
        const response = await prisma.public_promotion.findMany({
          where: {
            promotion_type: {
              contains: promotion_type,
              mode: "insensitive",
            }
          },
          orderBy: {
            created_at: "desc",
          },
        });

        if (!response) {
          set.status = 404;
          return { message: `No ${promotion_type} promotions found` };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching flash sale promotions:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        promotion_type: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Search by Promotion Type",
        description: `
          This endpoint retrieves all active promotions by promotion type in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/promotions/flash-sale/:promotion_id",
    async ({ headers, params, set }) => {
      try {
        const { promotion_id } = params;
        const response = await prisma.public_promotion.findUnique({
          where: {
            id: promotion_id,
          },
          select: {
            url_image: true,
            promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            promotion_flashsale_products: {
              select: {
                product_option_id: true,
                sale_price: true,
                sale_percent: true,
              },
            },
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Flash sale promotion not found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching flash sale promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Flash Sale - GET By Promotion ID",
        description: `
          This endpoint retrieves the details of a flash sale promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/promotions/flash-sale",
    async({ headers, body, set }) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          items
        } = body;

        const response = await prisma.public_promotion.create({
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            is_active: true,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create flash sale promotion" };
        }
        const promotionId = response.id;
        
        await prisma.public_promotion_flashsale_products.createMany({
          data: items.map((item: any) => ({
            promotion_id: promotionId,
            product_option_id: item.product_option_id,
            sale_price: item.sale_price,
            sale_percent: item.sale_percent,
          }))
        });

        return { message: "Flash sale promotion created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating flash sale promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.String(),
        promotion_image: t.String(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        items: t.Array(t.Object({
          product_option_id: t.Number(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
        })),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Flash Sale - Create",
        description: `
          This endpoint creates a new flash sale promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .put(
    "/promotions/flash-sale/:promotion_id",
    async({ headers, body, params, set }) => {
      try {
        const { promotion_id } = params;
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_active,
          is_accept_overlapse_promotion,
          items
        } = body;

        const response = await prisma.public_promotion.update({
          where: {
            id: promotion_id,
          },
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_active: is_active,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            updated_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update flash sale promotion" };
        }

        await prisma.public_promotion_flashsale_products.deleteMany({
          where: {
            promotion_id: promotion_id,
          },
        });

        await prisma.public_promotion_flashsale_products.createMany({
          data: items.map((item: any) => ({
            promotion_id: promotion_id,
            product_option_id: item.product_option_id,
            sale_price: item.sale_price,
            sale_percent: item.sale_percent,
          })),
        });

        return { message: "Flash sale promotion updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating flash sale promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.String(),
        promotion_image: t.String(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_active: t.Boolean(),
        is_accept_overlapse_promotion: t.Boolean(),
        items: t.Array(t.Object({
          product_option_id: t.Number(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
        })),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Flash Sale - Update",
        description: `
          This endpoint updates an existing flash sale promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .delete(
    "/promotions/flash-sale/:promotion_id",
    async({ params, set }) => {
      try {
        const { promotion_id } = params;

        const response = await prisma.public_promotion.delete({
          where: {
            id: promotion_id,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Flash sale promotion not found" };
        }

        return { message: "Flash sale promotion deleted successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting flash sale promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Flash Sale - Delete",
        description: `
          This endpoint deletes an existing flash sale promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/promotions/discount/:promotion_id",
    async ({ headers, params, set }) => {
      try {
        const { promotion_id } = params;
        const response = await prisma.public_promotion.findUnique({
          where: {
            id: promotion_id,
          },
          select: {
            url_image: true,
            promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            promotion_discount_products: {
              select: {
                product_option_id: true,
                sale_price: true,
                sale_percent: true,
              },
            },
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Discount promotion not found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching discount promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Discount - GET By Promotion ID",
        description: `
          This endpoint retrieves the details of a discount promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/promotions/discount",
    async({ headers, body, set }) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          items
        } = body;

        const response = await prisma.public_promotion.create({
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            is_active: true,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create discount promotion" };
        }
        const promotionId = response.id;
        
        await prisma.public_promotion_discount_products.createMany({
          data: items.map((item: any) => ({
            promotion_id: promotionId,
            product_option_id: item.product_option_id,
            sale_price: item.sale_price,
            sale_percent: item.sale_percent,
          }))
        });

        return { message: "Discount promotion created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating discount promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        items: t.Array(t.Object({
          product_option_id: t.Number(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
        })),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Discount - Create",
        description: `
          This endpoint creates a new discount promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .put(
    "/promotions/discount/:promotion_id",
    async({ headers, body, params, set }) => {
      try {
        const { promotion_id } = params;
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_active,
          is_accept_overlapse_promotion,
          items
        } = body;

        const response = await prisma.public_promotion.update({
          where: {
            id: promotion_id,
          },
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_active: is_active,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            updated_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update discount promotion" };
        }

        await prisma.public_promotion_discount_products.deleteMany({
          where: {
            promotion_id: promotion_id,
          },
        });

        await prisma.public_promotion_discount_products.createMany({
          data: items.map((item: any) => ({
            promotion_id: promotion_id,
            product_option_id: item.product_option_id,
            sale_price: item.sale_price,
            sale_percent: item.sale_percent,
          })),
        });

        return { message: "Discount promotion updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating discount promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.String(),
        promotion_image: t.String(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_active: t.Boolean(),
        is_accept_overlapse_promotion: t.Boolean(),
        items: t.Array(t.Object({
          product_option_id: t.Number(),
          sale_price: t.Number(),
          sale_percent: t.Number(),
        })),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Discount - Update",
        description: `
          This endpoint updates an existing discount promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .delete(
    "/promotions/discount/:promotion_id",
    async({ params, set }) => {
      try {
        const { promotion_id } = params;

        const response = await prisma.public_promotion.delete({
          where: {
            id: promotion_id,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Discount promotion not found" };
        }

        return { message: "Discount promotion deleted successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting discount promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Discount - Delete",
        description: `
          This endpoint deletes an existing discount promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/promotions/bundle-deal",
    async({ set }) => {
      try {
        const response = await prisma.public_promotion.findMany({
          where: {
            promotion_type: {
              in: ["bundle_deal_get_x_free_y", "bundle_deal_grand_total_free_y"],
            },
          },
          select: {
            id: true,
            url_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            customer_tiers: true,
          }
        });
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting bundle deal promotions:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal - Find All",
        description: `
          This endpoint gets all bundle deal promotions in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/promotions/bundle-deal/get-x-free-y",
    async({ headers, body, set }) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          customer_tiers,
          get_products,
        } = body;

        const response = await prisma.public_promotion.create({
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            customer_tiers: customer_tiers,
            is_active: true,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create discount promotion" };
        }
        const promotionId = response.id;
        
        for (const item of get_products) {
          const getProducts = await prisma.public_promotion_bundle_deal_get_products.create({
            data: {
              promotion_id: promotionId,
              product_option_id: item.product_option_id,
              get_quantity: item.buy_quantity,
            },
            select: {
              id: true,
            },
          })

          const bundle_deal_get_id = getProducts.id;
          await prisma.public_promotion_bundle_deal_free_products.createMany({
            data: item.free_products.map((freeProduct: any) => ({
              bundle_deal_get_id: bundle_deal_get_id,
              product_option_id: freeProduct.product_option_id,
              free_quantity: freeProduct.free_quantity,
            }))
          });

        }

        return { message: "Bundle deal get x free y promotion created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating bundle deal get x free y promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.String(),
        promotion_image: t.String(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        customer_tiers: t.Array(t.String()),
        get_products: t.Array(t.Object({
          product_option_id: t.Number(),
          buy_quantity: t.Number(),
          free_products: t.Array(t.Object({
            product_option_id: t.Number(),
            free_quantity: t.Number(),
          })),
        })),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Get X Free Y - Create",
        description: `
          This endpoint creates a new bundle deal get x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .put(
    "/promotions/bundle-deal/get-x-free-y/:promotion_id",
    async({ headers, body, set, params }) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_active,
          is_accept_overlapse_promotion,
          customer_tiers,
          get_products,
        } = body;

        const { promotion_id } = params;
        
        const response = await prisma.public_promotion.update({
          where: {
            id: promotion_id,
          },
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_active: is_active,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            customer_tiers: customer_tiers,
            updated_at: now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update get x free y promotion" };
        }

        const existingGetProducts = await prisma.public_promotion_bundle_deal_get_products.findMany({
          where: {
            promotion_id: promotion_id,
          },
          select: {
            id: true,
          }
        });

        const arrayOfGetProductIds = existingGetProducts.map((item) => item.id);

        await prisma.public_promotion_bundle_deal_free_products.deleteMany({
          where: {
            bundle_deal_get_id: {
              in: arrayOfGetProductIds,
            },
          },
        });

        await prisma.public_promotion_bundle_deal_get_products.deleteMany({
          where: {
            promotion_id: promotion_id,
          },
        });

        for (const item of get_products) {
          const getProducts = await prisma.public_promotion_bundle_deal_get_products.create({
            data: {
              promotion_id: promotion_id,
              product_option_id: item.product_option_id,
              get_quantity: item.buy_quantity,
            },
            select: {
              id: true,
            },
          })

          const bundle_deal_get_id = getProducts.id;
          await prisma.public_promotion_bundle_deal_free_products.createMany({
            data: item.free_products.map((freeProduct: any) => ({
              bundle_deal_get_id: bundle_deal_get_id,
              product_option_id: freeProduct.product_option_id,
              free_quantity: freeProduct.free_quantity,
            }))
          });

        }

        return { message: "Bundle deal get x free y promotion updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating bundle deal get x free y promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      body: t.Object({
        url_image: t.String(),
        promotion_image: t.String(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        is_active: t.Boolean(),
        customer_tiers: t.Array(t.String()),
        get_products: t.Array(t.Object({
          product_option_id: t.Number(),
          buy_quantity: t.Number(),
          free_products: t.Array(t.Object({
            product_option_id: t.Number(),
            free_quantity: t.Number(),
          })),
        })),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Get X Free Y - Update",
        description: `
          This endpoint updates a bundle deal get x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .get(
    "/promotions/bundle-deal/get-x-free-y/:promotion_id",
    async ({ params, set }) => {
      try {
        const { promotion_id } = params;

        const promotion = await prisma.public_promotion.findUnique({
          where: {
            id: promotion_id,
          },
          select: {
            id: true,
            url_image: true,
            promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            customer_tiers: true,
            promotion_bundle_deal_get_products: {
              select: {
                product_option_id: true,
                get_quantity: true,
                promotion_bundle_deal_free_products: {
                  select: {
                    product_option_id: true,
                    free_quantity: true,
                  },
                },
              },  
            },
          },
        });

        if (!promotion) {
          set.status = 404;
          return { message: "Promotion not found" };
        }

        return promotion;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching bundle deal promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Get X Free Y - GET By Promotion ID",
        description: `
          This endpoint fetches an existing bundle deal get x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .delete(
    "/promotions/bundle-deal/:promotion_id",
    async ({ params, set }) => {
      try {
        const { promotion_id } = params;

        const response = await prisma.public_promotion.delete({
          where: {
            id: promotion_id,
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Promotion not found" };
        }

        return { message: "Promotion deleted successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting bundle deal promotion:", error);
        return { message: errorMessage }; 
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Get X Free Y - Delete",
        description: `
          This endpoint deletes an existing bundle deal get x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
       },
    }
  )
  .post(
    "/promotions/bundle-deal/grand-total-x-free-y",
    async({ headers, body, set }) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          customer_tiers,
          tiers,
        } = body;

        const response = await prisma.public_promotion.create({
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            customer_tiers: customer_tiers,
            is_active: true,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to create grand total x free y promotion" };
        }
        const promotionId = response.id;

        for (const tier of tiers) {
          const resTier = await prisma.promotion_bundle_deal_grand_total_tiers.create({
            data: {
              promotion_id: promotionId,
              level_no: tier.level_no,
              minimum_grand_total: tier.minimum_grand_total,
            },
            select : {
              id: true,
            }
          });

          const tier_id = resTier.id;
          for (const free_product of tier.free_products){
            await prisma.public_promotion_bundle_deal_grand_total_free_products.create({
              data: {
                bundle_deal_grand_total_tiers_id: tier_id,
                product_option_id: free_product.product_option_id,
                free_quantity: free_product.free_quantity,
              }
            });
          }
        }

        return { message: "Bundle deal grand total x free y promotion created successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating bundle deal grand total x free y promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        customer_tiers: t.Array(t.String()),
        tiers: t.Array(
          t.Object({
            level_no: t.Number(),
            minimum_grand_total: t.Number(),
            free_products: t.Array(
              t.Object({
                product_option_id: t.Number(),
                free_quantity: t.Number(),
              })
            ),
          })
        ),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Grand Total X Free Y - Create",
        description: `
          This endpoint creates a new bundle deal grand total x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .put(
    "/promotions/bundle-deal/grand-total-x-free-y/:promotion_id",
    async({ headers, body, set, params }) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          customer_tiers,
          tiers,
        } = body;

        const { promotion_id } = params;
        
        const response = await prisma.public_promotion.update({
          where: {
            id: promotion_id,
          },
          data: {
            url_image: url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            customer_tiers: customer_tiers,
            updated_at: now,
          },
        });

        // Delete existing tiers
        await prisma.promotion_bundle_deal_grand_total_tiers.deleteMany({
          where: {
            promotion_id: promotion_id,
          },
        });

        // Create new tiers
        for (const tier of tiers) {
          const resTier = await prisma.promotion_bundle_deal_grand_total_tiers.create({
            data: {
              promotion_id: promotion_id,
              level_no: tier.level_no,
              minimum_grand_total: tier.minimum_grand_total,
            },
            select: {
              id: true,
            }
          });

          const tier_id = resTier.id;
          
          for (const freeProduct of tier.free_products) {
            await prisma.public_promotion_bundle_deal_grand_total_free_products.create({
              data: {
                bundle_deal_grand_total_tiers_id: tier_id,
                product_option_id: freeProduct.product_option_id,
                free_quantity: freeProduct.free_quantity,
              },
            });
          }
        }

        if (!response) {
          set.status = 400;
          return { message: "Failed to update grand total x free y promotion" };
        }

        return { message: "Bundle deal grand total x free y promotion updated successfully" };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating bundle deal grand total x free y promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.String(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        customer_tiers: t.Array(t.String()),
        tiers: t.Array(
          t.Object({
            level_no: t.Number(),
            minimum_grand_total: t.Number(),
            free_products: t.Array(
              t.Object({
                product_option_id: t.Number(),
                free_quantity: t.Number(),
              })
            ),
          })
        ),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Grand Total X Free Y - Update",
        description: `
          This endpoint updates a new bundle deal grand total x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    }
  )
  .get(
    "/promotions/bundle-deal/grand-total-x-free-y/:promotion_id",
    async ({ params, set }) => {
      try {
        const { promotion_id } = params;

        const promotion = await prisma.public_promotion.findUnique({
          where: {
            id: promotion_id,
          },
          select: {
            id: true,
            url_image: true,
            promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            customer_tiers: true,
            promotion_bundle_deal_grand_total_tiers: {
              select: {
                level_no: true,
                minimum_grand_total: true,
                promotion_bundle_deal_grand_total_free_products: {
                  select: {
                    product_option_id: true,
                    free_quantity: true,
                  },
                },
              },
            },
          },
        });

        if (!promotion) {
          set.status = 404;
          return { message: "Promotion not found" };
        }

        return promotion;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching bundle deal grand total x free y promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Bundle Deal Grand Total X Free Y - GET By Promotion ID",
        description: `
          This endpoint fetches an existing bundle deal grand total x free y promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/promotions/extra-points/bill-total",
    async({headers, body, set}) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          is_active,
          tier_rules,
        } = body;

        const response = await prisma.public_promotion.create({
          data: {
            url_image : url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            is_active: is_active,
            created_at: now
          },
          select : {
            id: true,
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed creating extra points." }
        }

        const promotionId = response.id;
        await prisma.promotion_extra_points_tier_rules.createMany({
          data: tier_rules.map((rule: any) => ({
            ...rule,
            promotion_id: promotionId,
          }))
        });

        return { "message" : "Extra points created successfully." }
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.Any(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        is_active: t.Boolean(),
        tier_rules: t.Array(
          t.Object({
            level_no: t.Number(),
            min_amount: t.Number(),
            points_multiplier: t.Number(),
          })
        ),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points Bill Total - Create",
        description: `
          This endpoint creates a new extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/promotions/extra-points/product-point",
    async({headers, body, set}) => {
      try {
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          is_active,
          items,
        } = body;

        const response = await prisma.public_promotion.create({
          data: {
            url_image : url_image,
            promotion_image: promotion_image,
            promotion_name: promotion_name,
            promotion_description: promotion_description,
            promotion_type: promotion_type,
            promotion_start: promotion_start,
            promotion_end: promotion_end,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            is_active: is_active,
            created_at: now
          },
          select : {
            id: true,
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed creating extra points." }
        }

        const promotionId = response.id;
        await prisma.public_promotion_extra_points_products.createMany({
          data: items.map((item: any) => ({
            ...item,
            promotion_id: promotionId,
          }))
        });

        return { "message" : "Extra points created successfully." }
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.Any(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        is_active: t.Boolean(),
        items: t.Array(
          t.Object({
            product_option_id: t.Number(),
            points_multiplier: t.Number(),
          })
        ),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points Product - Create",
        description: `
          This endpoint creates a new extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/promotions/extra-points/bill-total/:promotion_id",
    async({params, set}) => {
      try {
        const { promotion_id } = params;
        
        const response = await prisma.public_promotion.findUnique({
          where: {
            id: promotion_id
          },
          select : {
            url_image: true,
            promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            promotion_extra_points_tier_rules: {
              select: {
                level_no: true,
                min_amount: true,
                points_multiplier: true
              },
              orderBy: {
                level_no: "asc",
              }
            }
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed getting extra points." }
        }
        
        return response;
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points Bill Total - GET By Promotion ID",
        description: `
          This endpoint gets an existing extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/promotions/extra-points/product-point/:promotion_id",
    async({params, set}) => {
      try {
        const { promotion_id } = params;
        
        const response = await prisma.public_promotion.findUnique({
          where: {
            id: promotion_id
          },
          select : {
            url_image: true,
            promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_type: true,
            promotion_start: true,
            promotion_end: true,
            is_active: true,
            is_accept_overlapse_promotion: true,
            promotion_extra_points_products: {
              select: {
                product_option_id: true,
                points_multiplier: true
              }
            }
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed getting extra points." }
        }
        
        return response;
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error getting extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points Product - GET By Promotion ID",
        description: `
          This endpoint gets an existing extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .put(
    "/promotions/extra-points/bill-total/:promotion_id",
    async({params, body, set}) => {
      try {
        const { promotion_id } = params;
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          is_active,
          tier_rules
        } = body;
        
        const response = await prisma.public_promotion.update({
          where: {
            id: promotion_id
          },
          data: {
            url_image,
            promotion_image,
            promotion_name,
            promotion_description,
            promotion_type,
            promotion_start,
            promotion_end,
            is_accept_overlapse_promotion,
            is_active,
            updated_at: now,
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed updating extra points." }
        }

        await prisma.promotion_extra_points_tier_rules.deleteMany({
          where: {
            promotion_id: promotion_id,
          }
        });

        await prisma.promotion_extra_points_tier_rules.createMany({
          data: tier_rules.map((rule: any) => ({
            ...rule,
            promotion_id: promotion_id,
          }))
        });

        return { "message" : "Extra points updated successfully." };
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.Any(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        is_active: t.Boolean(),
        tier_rules: t.Array(
          t.Object({
            level_no: t.Number(),
            min_amount: t.Number(),
            points_multiplier: t.Number(),
          })
        ),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points Bill Total - Update",
        description: `
          This endpoint updates an existing extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .put(
    "/promotions/extra-points/product-point/:promotion_id",
    async({params, body, set}) => {
      try {
        const { promotion_id } = params;
        const {
          url_image,
          promotion_image,
          promotion_name,
          promotion_description,
          promotion_type,
          promotion_start,
          promotion_end,
          is_accept_overlapse_promotion,
          is_active,
          items
        } = body;
        
        const response = await prisma.public_promotion.update({
          where: {
            id: promotion_id
          },
          data: {
            url_image,
            promotion_image,
            promotion_name,
            promotion_description,
            promotion_type,
            promotion_start,
            promotion_end,
            is_accept_overlapse_promotion,
            is_active,
            updated_at: now,
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed updating extra points." }
        }

        await prisma.public_promotion_extra_points_products.deleteMany({
          where: {
            promotion_id: promotion_id,
          }
        });

        await prisma.public_promotion_extra_points_products.createMany({
          data: items.map((item: any) => ({
            ...item,
            promotion_id: promotion_id,
          }))
        });

        return { "message" : "Extra points updated successfully." };
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      body: t.Object({
        url_image: t.Any(),
        promotion_image: t.Any(),
        promotion_name: t.String(),
        promotion_description: t.Any(),
        promotion_type: t.String(),
        promotion_start: t.Date(),
        promotion_end: t.Date(),
        is_accept_overlapse_promotion: t.Boolean(),
        is_active: t.Boolean(),
        items: t.Array(
          t.Object({
            product_option_id: t.Number(),
            points_multiplier: t.Number(),
          })
        ),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points Product - Update",
        description: `
          This endpoint updates an existing extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .delete(
    "/promotions/extra-points/:promotion_id",
    async({params, set}) => {
      try {
        const { promotion_id } = params;
        
        const response = await prisma.public_promotion.delete({
          where: {
            id: promotion_id
          }
        })

        if (!response) {
          set.status = 404;
          return { "message" : "Failed deleting extra points." }
        }
        
        return { "message" : "Extra points deleted successfully." };
      }catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting extra points promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points - Delete",
        description: `
          This endpoint deletes an existing extra points promotion in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/gift-voucher/generic",
    async({ headers, set}) => {
      try {
        const response = await prisma.gift_voucher.findMany({
          where: {
            gift_voucher_type: "generic",
          },
          select: {
            id: true,
            url_image: true,
            voucher_name: true,
            voucher_description: true,
            voucher_conditions: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            usage_period_day: true,
            is_accept_overlapse_promotion: true,
            is_limit_voucher: true,
            is_active: true,
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "No generic gift vouchers found." }
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching generic gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Generic - Find All",
        description: `
          This endpoint finds all generic gift vouchers in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/gift-voucher/generic/:gift_voucher_id",
    async({ headers, params, set}) => {
      try {
        const { gift_voucher_id } = params;
        const response = await prisma.gift_voucher.findFirst({
          where: {
            gift_voucher_type: "generic",
            id: gift_voucher_id,
          },
          select: {
            url_image: true,
            voucher_image: true,
            voucher_name: true,
            voucher_description: true,
            voucher_conditions: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            specific_customers: true,
            is_accept_overlapse_promotion: true,
            is_limit_voucher: true,
            is_specific_customers: true,
            is_active: true,
            is_lifetime_period: true,
            gift_voucher_method: true,
            limited_total_quantity: true,
            usage_period_day: true,
            gift_voucher_generic: {
              select: {
                discount_type: true,
                max_discount: true,
                min_purchase: true,
                percent_discount: true,
              }
            }
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "No generic gift vouchers found." }
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching generic gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Generic - Find by Gift Voucher ID",
        description: `
          This endpoint finds a specific generic gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/gift-voucher/generic",
    async({ headers, set, body}) => {
      try {
        const {
          gift_voucher_generic,
          gift_voucher_method,
          is_active,
          is_limit_voucher,
          is_accept_overlapse_promotion,
          limited_total_quantity,
          url_image,
          voucher_conditions,
          voucher_description,
          voucher_name,
          voucher_image,
        } = body;

        const response = await prisma.gift_voucher.create({
          data: {
            url_image: url_image,
            gift_voucher_type: 'generic',
            gift_voucher_method: gift_voucher_method,
            voucher_image: voucher_image,
            voucher_name: voucher_name,
            voucher_description: voucher_description,
            voucher_conditions: voucher_conditions,
            is_limit_voucher: is_limit_voucher,
            is_active: is_active,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            limited_total_quantity: limited_total_quantity,
            voucher_uuid: crypto.randomUUID(),
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if(!response) {
          set.status = 400;
          return { "message" : "Failed to create generic gift voucher." }
        }

        if(gift_voucher_generic) {
          const giftVoucherId = response.id;
          
          await prisma.gift_voucher_generic.create({
            data: {
              gift_voucher_id: giftVoucherId,
              discount_type: gift_voucher_generic.discount_type,
              max_discount: gift_voucher_generic.max_discount,
              min_purchase: gift_voucher_generic.min_purchase,
              percent_discount: gift_voucher_generic.percent_discount,
            }
          });
        }

        return { "message" : "Generic gift voucher created successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating generic gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        gift_voucher_generic: t.Any(),
        gift_voucher_method: t.String(),
        is_active: t.Boolean(),
        is_limit_voucher: t.Boolean(),
        is_accept_overlapse_promotion : t.Boolean(),
        limited_total_quantity: t.Any(),
        url_image: t.Any(),
        voucher_conditions: t.Any(),
        voucher_description: t.String(),
        voucher_name: t.String(),
        voucher_image: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Generic - Create",
        description: `
          This endpoint creates a new generic gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .put(
    "/gift-voucher/generic/:gift_voucher_id",
    async({ headers, set, body, params }) => {
      try {
        const { gift_voucher_id } = params;
        const {
          gift_voucher_generic,
          gift_voucher_method,
          is_active,
          is_limit_voucher,
          is_accept_overlapse_promotion,
          limited_total_quantity,
          url_image,
          voucher_conditions,
          voucher_description,
          voucher_name,
          voucher_image,
        } = body;

        const response = await prisma.gift_voucher.update({
          where: {
            id: gift_voucher_id
          },
          data: {
            url_image: url_image,
            gift_voucher_type: 'generic',
            gift_voucher_method: gift_voucher_method,
            voucher_image: voucher_image,
            voucher_name: voucher_name,
            voucher_description: voucher_description,
            voucher_conditions: voucher_conditions,
            is_limit_voucher: is_limit_voucher,
            is_active: is_active,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            limited_total_quantity: limited_total_quantity,
            updated_at: now,
          },
          select: {
            id: true,
          }
        });

        if(!response) {
          set.status = 400;
          return { "message" : "Failed to update generic gift voucher." }
        }
        
        await prisma.gift_voucher_generic.updateMany({
          where: {
            gift_voucher_id: gift_voucher_id,
          },
          data: {
            discount_type: gift_voucher_generic.discount_type,
            max_discount: gift_voucher_generic.max_discount,
            min_purchase: gift_voucher_generic.min_purchase,
            percent_discount: gift_voucher_generic.percent_discount,
          }
        });

        return { "message" : "Generic gift voucher updated successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating generic gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      body: t.Object({
        gift_voucher_generic: t.Object({
          discount_type: t.String(),
          max_discount: t.Any(),
          min_purchase: t.Any(),
          percent_discount: t.Any(),
        }),
        gift_voucher_method: t.String(),
        is_active: t.Boolean(),
        is_limit_voucher: t.Boolean(),
        is_accept_overlapse_promotion: t.Boolean(),
        limited_total_quantity: t.Any(),
        url_image: t.Any(),
        voucher_conditions: t.Any(),
        voucher_description: t.String(),
        voucher_name: t.String(),
        voucher_image: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Generic - Update",
        description: `
          This endpoint updates an existing generic gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/gift-voucher/event",
    async({ headers, set}) => {
      try {
        const response = await prisma.gift_voucher.findMany({
          where: {
            gift_voucher_type: "event",
          },
          select: {
            id: true,
            url_image: true,
            voucher_name: true,
            voucher_description: true,
            voucher_conditions: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            is_accept_overlapse_promotion: true,
            is_limit_voucher: true,
            is_active: true,
            usage_period_day: true,
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "No event gift vouchers found." }
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching event gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Event - Find All",
        description: `
          This endpoint finds all event gift vouchers in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/gift-voucher/event/:gift_voucher_id",
    async({ headers, params, set}) => {
      try {
        const { gift_voucher_id } = params;
        const response = await prisma.gift_voucher.findFirst({
          where: {
            gift_voucher_type: "event",
            id: gift_voucher_id,
          },
          select: {
            url_image: true,
            voucher_image: true,
            voucher_name: true,
            voucher_description: true,
            voucher_conditions: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            specific_customers: true,
            is_accept_overlapse_promotion: true,
            is_limit_voucher: true,
            is_specific_customers: true,
            is_active: true,
            is_lifetime_period: true,
            gift_voucher_method: true,
            limited_total_quantity: true,
            usage_period_day: true,
            event_trigger: true,
            tier_trigger_name: true,
            gift_voucher_campaign_voucher: {
              select: { 
                gift_voucher_id: true,
                generic_voucher_id: true,
              }
            }
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "No event gift vouchers found." }
        }
        
        const result = {
          ...response,
          generic_voucher_ids: response.gift_voucher_campaign_voucher.map(index => index.generic_voucher_id)
        }

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching event gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Event - Find by Gift Voucher ID",
        description: `
          This endpoint finds a specific event gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .post(
    "/gift-voucher/event",
    async({ headers, set, body}) => {
      try {
        const {
          campaign_start,
          campaign_end,
          customer_tiers,
          is_active,
          url_image,
          voucher_conditions,
          voucher_description,
          voucher_name,
          voucher_image,
          is_lifetime_period,
          generic_voucher_ids,
          event_trigger,
          tier_trigger_name,
        } = body;

        const response = await prisma.gift_voucher.create({
          data: {
            url_image: url_image,
            gift_voucher_type: 'event',
            voucher_image: voucher_image,
            voucher_name: voucher_name,
            voucher_description: voucher_description,
            voucher_conditions: voucher_conditions,
            campaign_start: campaign_start,
            campaign_end: campaign_end,
            customer_tiers: customer_tiers,
            is_active: is_active,
            is_lifetime_period: is_lifetime_period,
            voucher_uuid: crypto.randomUUID(),
            event_trigger: event_trigger,
            tier_trigger_name: tier_trigger_name,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if(!response) {
          set.status = 400;
          return { "message" : "Failed to create event gift voucher." }
        }

        const gift_voucher_id = response.id;
        for(const generic_voucher_id of generic_voucher_ids){
          await prisma.gift_voucher_campaign_voucher.create({
            data: {
              gift_voucher_id: gift_voucher_id,
              generic_voucher_id: generic_voucher_id
            }
          })
        };

        return { "message" : "Event gift voucher created successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating event gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        campaign_end: t.Any(),
        campaign_start: t.Any(),
        customer_tiers: t.Any(),
        event_trigger: t.String(),
        generic_voucher_ids: t.Array(t.Number()),
        is_active: t.Boolean(),
        is_lifetime_period: t.Boolean(),
        tier_trigger_name: t.Any(),
        url_image: t.Any(),
        voucher_conditions: t.Any(),
        voucher_description: t.String(),
        voucher_name: t.String(),
        voucher_image: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Event - Create",
        description: `
          This endpoint creates a new event gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .put(
    "/gift-voucher/event/:gift_voucher_id",
    async({ headers, set, body, params }) => {
      try {
        const {
          campaign_start,
          campaign_end,
          customer_tiers,
          is_active,
          url_image,
          voucher_conditions,
          voucher_description,
          voucher_name,
          voucher_image,
          is_lifetime_period,
          generic_voucher_ids,
          event_trigger,
          tier_trigger_name,
        } = body;
        const gift_voucher_id = params.gift_voucher_id;

        const response = await prisma.gift_voucher.update({
          where: {
            id: gift_voucher_id
          },
          data: {
            url_image: url_image,
            gift_voucher_type: 'event',
            voucher_image: voucher_image,
            voucher_name: voucher_name,
            voucher_description: voucher_description,
            voucher_conditions: voucher_conditions,
            campaign_start: campaign_start,
            campaign_end: campaign_end,
            customer_tiers: customer_tiers,
            is_active: is_active,
            is_lifetime_period: is_lifetime_period,
            voucher_uuid: crypto.randomUUID(),
            event_trigger: event_trigger,
            tier_trigger_name: tier_trigger_name,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if(!response) {
          set.status = 400;
          return { "message" : "Failed to update event gift voucher." }
        }

        await prisma.gift_voucher_campaign_voucher.deleteMany({
          where: {
            gift_voucher_id: gift_voucher_id,
          }
        });

        for(const generic_voucher_id of generic_voucher_ids){
          await prisma.gift_voucher_campaign_voucher.create({
            data: {
              gift_voucher_id: gift_voucher_id,
              generic_voucher_id: generic_voucher_id
            }
          })
        };

        return { "message" : "Event gift voucher updated successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating event gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      body: t.Object({
        campaign_end: t.Any(),
        campaign_start: t.Any(),
        customer_tiers: t.Any(),
        event_trigger: t.String(),
        generic_voucher_ids: t.Array(t.Number()),
        is_active: t.Boolean(),
        is_lifetime_period: t.Boolean(),
        tier_trigger_name: t.Any(),
        url_image: t.Any(),
        voucher_conditions: t.Any(),
        voucher_description: t.String(),
        voucher_name: t.String(),
        voucher_image: t.Any(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Event - Update",
        description: `
          This endpoint updates an existing event gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .delete(
    "/gift-voucher/generic/:gift_voucher_id",
    async({headers, set, params}) => {
      try {
        const { gift_voucher_id } = params;

        const response = await prisma.gift_voucher.delete({
          where: {
            id: gift_voucher_id,
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "Gift voucher not found." }
        }

        return { "message" : "Gift voucher deleted successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Generic - Delete",
        description: `
          This endpoint deletes an existing generic gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
    }}
  )
  .delete(
    "/gift-voucher/event/:gift_voucher_id",
    async({headers, set, params}) => {
      try {
        const { gift_voucher_id } = params;

        const response = await prisma.gift_voucher.delete({
          where: {
            id: gift_voucher_id,
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "Gift voucher not found." }
        }

        return { "message" : "Gift voucher deleted successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Event - Delete",
        description: `
          This endpoint deletes an existing event gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
    }}
  )
  .get(
    "/gift-voucher/redeem-code",
    async ({ headers, set }) => {
      try {
        const response = await prisma.gift_voucher.findMany({
          where: {
            gift_voucher_type: "redeem_code",
          },
          select: {
            id: true,
            url_image: true,
            voucher_image: true,
            voucher_name: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            is_limit_voucher: true,
            is_active: true,
            limited_total_quantity: true,
            is_lifetime_period: true,
            updated_at: true,
            gift_voucher_redeem_code: {
              select: {
                redeem_code: true,
                max_discount: true,
                max_usage_per_customer: true,
              }
            }
          }
        });
        
        if(!response) {
          set.status = 404;
          return { "message" : "No redeem code gift vouchers found." }
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching redeem code gift vouchers:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Redeem Code - Find All",
        description: `
          This endpoint retrieves all existing redeem code gift vouchers in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
    }}
  )
  .get(
    "/gift-voucher/redeem-code/:gift_voucher_id",
    async ({ headers, set, params }) => {
      try {
        const { gift_voucher_id } = params;

        const response = await prisma.gift_voucher.findFirst({
          where: {
            gift_voucher_type: "redeem_code",
            id: gift_voucher_id,
          },
          select : {
            url_image: true,
            voucher_image: true,
            voucher_name: true,
            voucher_description: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            is_accept_overlapse_promotion: true,
            is_limit_voucher: true,
            is_active: true,
            is_lifetime_period: true,
            limited_total_quantity: true,
            usage_period_day: true,
            gift_voucher_redeem_code: {
              select: {
                redeem_code: true,
                max_discount: true,
                max_usage_per_customer: true,
              }
            },
          }
        });
        
        if(!response) {
          set.status = 404;
          return { "message" : "No redeem code gift vouchers found." }
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching redeem code gift vouchers:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Redeem Code - Find All",
        description: `
          This endpoint retrieves all existing redeem code gift vouchers in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
    }}
  )
  .post(
    "/gift-voucher/redeem-code",
    async({ headers, body, set}) => {
      try {
        const {
          url_image,
          voucher_image,
          voucher_name,
          voucher_description,
          voucher_conditions,
          campaign_start,
          campaign_end,
          customer_tiers,
          is_accept_overlapse_promotion,
          is_limit_voucher,
          is_active,
          gift_voucher_type,
          voucher_uuid,
          limited_total_quantity,
          is_lifetime_period,
          redeem_code,
          max_usage_per_customer,
          max_discount,
        } = body;

        const response = await prisma.gift_voucher.create({
          data: {
            url_image: url_image,
            voucher_image: voucher_image,
            voucher_name: voucher_name,
            voucher_description : voucher_description,
            voucher_conditions : voucher_conditions,
            campaign_start: campaign_start,
            campaign_end: campaign_end,
            customer_tiers: customer_tiers,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            is_limit_voucher: is_limit_voucher,
            is_active: is_active,
            gift_voucher_type: gift_voucher_type,
            voucher_uuid: voucher_uuid,
            limited_total_quantity: limited_total_quantity,
            is_lifetime_period: is_lifetime_period,
            created_at: now,
          },
          select: {
            id: true,
          }
        });

        if(!response) {
          set.status = 400;
          return { "message" : "Failed to create gift voucher." }
        }

        const responseCreate = await prisma.gift_voucher_redeem_code.create({
          data: {
            gift_voucher_id: response.id,
            redeem_code: redeem_code,
            max_discount: max_discount,
            max_usage_per_customer: max_usage_per_customer,
          }
        });

        if(!responseCreate){
          set.status = 400;
          return { "message" : "Failed to create redeem code." }
        }

        return { "message" : "Redeem code gift voucher created successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error creating redeem code gift voucher:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        url_image: t.Any(),
        voucher_image: t.Any(),
        voucher_name: t.String(),
        voucher_description: t.Any(),
        voucher_conditions: t.Any(),
        campaign_start: t.Any(),
        campaign_end: t.Any(),
        customer_tiers: t.Array(t.String()),
        is_accept_overlapse_promotion: t.Boolean(),
        is_limit_voucher: t.Boolean(),
        is_active: t.Boolean(),
        gift_voucher_type: t.String(),
        voucher_uuid: t.String(),
        limited_total_quantity: t.Any(),
        is_lifetime_period: t.Boolean(),
        redeem_code: t.String(),
        max_usage_per_customer: t.Number(),
        max_discount: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Redeem Code - Create",
        description: `
          This endpoint creates a new redeem code gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      }
    }
  )
  .put(
    "/gift-voucher/redeem-code/:gift_voucher_id",
    async({ headers, body, set, params }) => {
      try {
        const { gift_voucher_id } = params;
        const {
          url_image,
          voucher_image,
          voucher_name,
          voucher_description,
          voucher_conditions,
          campaign_start,
          campaign_end,
          customer_tiers,
          is_accept_overlapse_promotion,
          is_limit_voucher,
          is_active,
          gift_voucher_type,
          limited_total_quantity,
          is_lifetime_period,
          redeem_code,
          max_usage_per_customer,
          max_discount,
        } = body;

        const response = await prisma.gift_voucher.update({
          where: {
            id: gift_voucher_id
          },
          data: {
            url_image: url_image,
            voucher_image: voucher_image,
            voucher_name: voucher_name,
            voucher_description : voucher_description,
            voucher_conditions : voucher_conditions,
            campaign_start: campaign_start,
            campaign_end: campaign_end,
            customer_tiers: customer_tiers,
            is_accept_overlapse_promotion: is_accept_overlapse_promotion,
            is_limit_voucher: is_limit_voucher,
            is_active: is_active,
            gift_voucher_type: gift_voucher_type,
            limited_total_quantity: limited_total_quantity,
            is_lifetime_period: is_lifetime_period,
            updated_at: now,
          },
        });

        if(!response) {
          set.status = 400;
          return { "message" : "Failed to update redeem code gift voucher." }
        }

        const resUpdate = await prisma.gift_voucher_redeem_code.updateMany({
          where : {
            gift_voucher_id: gift_voucher_id
          },
          data: {
            redeem_code: redeem_code,
            max_usage_per_customer: max_usage_per_customer,
            max_discount: max_discount
          }
        })

        if(!resUpdate){
          set.status = 400;
          return {"message" : "Failed to update voucher redeem code"};
        }

        return { "message" : "Redeem code gift voucher updated successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error updating redeem code gift voucher:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      body: t.Object({
        url_image: t.Any(),
        voucher_image: t.Any(),
        voucher_name: t.String(),
        voucher_description: t.Any(),
        voucher_conditions: t.Any(),
        campaign_start: t.Any(),
        campaign_end: t.Any(),
        customer_tiers: t.Array(t.String()),
        is_accept_overlapse_promotion: t.Boolean(),
        is_limit_voucher: t.Boolean(),
        is_active: t.Boolean(),
        gift_voucher_type: t.String(),
        limited_total_quantity: t.Any(),
        is_lifetime_period: t.Boolean(),
        redeem_code: t.String(),
        max_usage_per_customer: t.Number(),
        max_discount: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Redeem Code - Update",
        description: `
          This endpoint updates an existing redeem code gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      }
    }
  )
  .delete(
    "/gift-voucher/redeem-code/:gift_voucher_id",
    async({headers, set, params}) => {
      try {
        const { gift_voucher_id } = params;

        const response = await prisma.gift_voucher.delete({
          where: {
            id: gift_voucher_id,
          }
        });

        if(!response) {
          set.status = 404;
          return { "message" : "Gift voucher not found." }
        }

        return { "message" : "Gift voucher deleted successfully." };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error deleting gift voucher promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Gift Voucher Redeem Code - Delete",
        description: `
          This endpoint deletes an existing redeem code gift voucher in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
    }}
  )
  .post(
    "/orders",
    async ({ headers, set, body }) => {
      const admin_customeruser_id = body.admin_customeruser_id;
      const orders = await prisma.iM.findMany({
        where: {
          OR:[
            { 
              update_by: null,
            },
            {
              update_by: admin_customeruser_id,
            }
          ]
        },
        select: {
          docid: true,
          status: true,
          im: true,
          type: true,
          payment_status: true,
          payment_invoice_no: true,
          payment_method_type: true,
          created_at: true,
          order_uuid: true,
          company_id: true,
        }
      })

      const companyIds = [
        ...new Set(
          orders
            .map((order) => order.company_id)
            .filter((companyId): companyId is number => companyId !== null),
        ),
      ];
      const companies = companyIds.length > 0
        ? await prisma.public_companies.findMany({
            where: {
              id: { in: companyIds },
            },
            select: {
              id: true,
              name: true,
            },
          })
        : [];
      const companyNames = new Map(
        companies.map((company) => [company.id, company.name]),
      );

      const response = orders.map((order) => ({
        order_no: order.docid,
        payment_method_type: order.payment_method_type,
        order_status: order.status,
        im_no: order.im,
        order_type: order.type,
        payment_status: order.payment_status,
        payment_invoice_no: order.payment_invoice_no,
        created_at: order.created_at,
        order_uuid: order.order_uuid,
        companies: order.company_id === null
          ? null
          : { company_name: companyNames.get(order.company_id) ?? null },
      }));

      if(!response){
        set.status = 404;
        return { "message" : "No orders found." }
      }

      return response;
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        admin_customeruser_id: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Order - Find All",
        description: `
          This endpoint retrieves all orders from the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
    }}
  )
  .get(
    "/orders/:order_uuid",
    async({headers, set, params}) => {
      try{
        const order_uuid = params.order_uuid;
        
        const response = await prisma.iM.findFirst({
          where: {
            order_uuid: order_uuid,
          },
          select: {
            id: true,
            docid: true,
            buyer_customeruser_id: true,
            status: true,
            im: true,
            type: true,
            customer_invoice_address_id: true,
            shipping_address_id: true,
            payment_status: true,
            log_payment: true,
            order_uuid: true,
            created_at: true,
            updated_at: true,
            create_by: true,
            contact_id: true,
            company_id: true,
            credit_terms_day: true,
            shipping_cost: true,
            payment_invoice_no: true,
            admin_verify_status: true,
            payment_method_type: true,
          }
        });

        if(!response){
          set.status = 404;
          return { message: "Not found IM order."}
        }

        const company_id = response.company_id;
        const buyer_customeruser_id = response.buyer_customeruser_id;
        const shipping_address_id = response.shipping_address_id;
        const customer_invoice_address_id = response.customer_invoice_address_id;

        const resShippingAddress = shipping_address_id === null
          ? null
          : await prisma.customer_address.findFirst({
              where: {
                id: shipping_address_id,
              },
              select: {
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

        const resInvoiceAddress = customer_invoice_address_id === null ? null :
            await prisma.customer_invoice_address.findFirst({
              where : {
                id : customer_invoice_address_id
              },
              select : {
                tax_no: true,
                company_name: true,
                entity_id: true,
                entity_name: true,
                branch_code: true,
                branch_name: true,
                address_line1: true,
                address_line2: true,
                sub_district: true,
                district: true,
                province: true,
                post_code: true,
              }
            })

            
        const resCustomer = buyer_customeruser_id === null
          ? null
          : await prisma.vw_customer_information.findFirst({
              where: {
                OR: [
                  { user_id: String(buyer_customeruser_id) },
                  { member_no: String(buyer_customeruser_id) },
                ],
              },
              select: {
                member_no: true,
                prefix_th: true,
                fullname_th: true,
                email: true,
                phone_no: true,
              }
            });

        const resCompany = company_id === null
          ? null
          : await prisma.public_companies.findFirst({
              where: {
                id: company_id,
              },
              select: {
                name: true,
              }
            });

        const orderItems = await prisma.im_goods.findMany({
          where: {
            docid: response.id,
          },
          select: {
            product_option_id: true,
            qty: true,
            itemstatus: true,
            MR: true,
            location: true,
            Owner: true,
            exp: true,
            lot: true,
            io_qty: true,
            users_id: true,
            sale_price: true,
            order_price: true,
            admin_updated_at: true,
            is_free: true,
            promotion_from_product_option_id: true,
          },
        });

        const orderItemsInfo = orderItems.map(async (item) => {
          if (item.product_option_id === null) return null;

          const resProducts = await prisma.vw_products.findFirst({
            where: {
              product_option_id: item.product_option_id,
            },
            select: {
              product_option_id: true,
              mat_identity: true,
              product_name: true,
              option_name: true,
              unit: true,
              online_price: true,
              url_image: true,
            }
          });
          return {...resProducts}
        })

        const result = {
          id: response.id,
          order_no: response.docid,
          buyer_customeruser_id: response.buyer_customeruser_id,
          payment_method_type: response.payment_method_type,
          order_status: response.status,
          im_no: response.im,
          order_type: response.type,
          invoice_id: response.customer_invoice_address_id,
          shipping_address_id: response.shipping_address_id,
          payment_status: response.payment_status,
          log_payment: response.log_payment,
          order_uuid: response.order_uuid,
          created_at: response.created_at,
          updated_at: response.updated_at,
          order_created_by: response.create_by,
          contact_id: response.contact_id,
          company_id: response.company_id,
          credit_terms_day: response.credit_terms_day,
          shipping_cost: response.shipping_cost,
          payment_invoice_no: response.payment_invoice_no,
          admin_verify_status: response.admin_verify_status,
          order_billing_items: orderItems.map(mapImGoodsToOrderItemResponse),
          company_name: resCompany?.name || null,
          buyer_customer_info: resCustomer,
          shipping_address_info: resShippingAddress,
          invoice_address_info: resInvoiceAddress,
          order_items_info: await Promise.all(orderItemsInfo),
        }

        return result
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
        order_uuid: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Order Billing - Find by Order UUID",
        description: `Find order billing by order_uuid.`,
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    }
  )
  .get(
    "/products-online/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.public_products.findMany({
          where: {
            is_active: true,
            is_online_active: true,
          },
          select: {
            id: true,
            product_name: true,
            product_description: true,
            unit: true,
            brands: {
              select: {
                brand_name: true,
              },
            },
            product_categories: {
              select: {
                name: true,
              },
            },
            companies: {
              select: {
                name: true,
              },
            },
            is_pre_order: true,
            is_custom_options: true,
            product_options: {
              select: {
                id: true,
                mat_identity: true,
                option_name: true,
                online_price: true,
                min_price: true,
              },
              orderBy: {
                row_no: "asc",
              },
            },
            product_payment_method: {
              select: {
                id: true,
                product_id: true,
                payment_method_id: true,
                payment_methods: {
                  select: {
                    id: true,
                    name: true,
                    icon: true,
                    icon_color: true,
                    is_active: true,
                    sort_order: true,
                    image_url: true,
                    category: true,
                  },
                },
              },
            },
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching products:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Find All",
        description: `
          This endpoint retrieves all valid products in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/products-online/company",
    async ({ headers, set, body }) => {
      try {
        const company_id = body.company_id;
        const response = await prisma.public_products.findMany({
          where: {
            is_active: true,
            is_online_active: true,
            company_id: company_id,
          },
          select: {
            id: true,
            product_name: true,
            product_description: true,
            unit: true,
            brands: {
              select: {
                brand_name: true,
              },
            },
            product_categories: {
              select: {
                name: true,
              },
            },
            companies: {
              select: {
                name: true,
              },
            },
            is_pre_order: true,
            is_custom_options: true,
            product_images: {
              where: {
                is_show: true,
              },
              select: {
                url_image: true,
              },
            },
            product_options: {
              select: {
                id: true,
                mat_identity: true,
                option_name: true,
                online_price: true,
                min_price: true,
              },
              orderBy: {
                row_no: "asc",
              },
            },
            product_payment_method: {
              select: {
                id: true,
                product_id: true,
                payment_method_id: true,
                payment_methods: {
                  select: {
                    id: true,
                    name: true,
                    icon: true,
                    icon_color: true,
                    is_active: true,
                    sort_order: true,
                    image_url: true,
                    category: true,
                  },
                },
              },
            },
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching products:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        company_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Find products by Company ID",
        description: `
          This endpoint retrieves all valid products in the 3NConnect for a specific company.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/stock-inventory/product-mat-identity",
    async ({ headers, set, body }) => {
      try {
        const mat_identity = body.mat_identity;
        const stock = await prisma.vw_planetone_stocks.findFirst({
          where: {
            MATUnit: {
              startsWith: mat_identity,
            }
          },
          select: {
            qty_total: true,
          }
        });
        const stock_qty: number = stock?.qty_total || 0;
        
        return stock_qty;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching stock inventory:", error);
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        mat_identity: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Stock Inventory - Find stock by Material Identity",
        description: `
          This endpoint retrieves the stock quantity for a specific material identity.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/product-locations",
    async ({ headers, set, body }) => {
      try {
        const mat_identity = body.mat_identity;

        const response = await prisma.vw_planetone_stocks.findMany({
          where: {
            MATUnit: {
              startsWith: mat_identity,
            },
            qty_total: {
              gt: 0
            }
          },
          select: {
            Lot: true,
            location_id: true,
            purchaser_personnel: true,
            expired: true,
            invoice_id_mat_in: true,
            qty_total: true,
            age: true,
          },
          orderBy: {
            age: "desc"
          }
        })

        if(!response){
          set.status = 404;
          return { message: "Failed to get product locations." }
        }

        return response;
      } catch (error) {
        set.status = 500;
        return { message: error }
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        mat_identity: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Stock Inventory - Find stock by Material Identity",
        description: `
          This endpoint retrieves the stock quantity for a specific material identity.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/orders-create/submit",
    async ({ headers, set, body }) => {
      try {
        const loggedAt = parseNullableDateTime(body.logged_at);
        const orderDate = new Date();

        const result = await prisma.$transaction(async (tx) => {
          if (body.order_uuid) {
            const duplicateOrder = await tx.iM.findFirst({
              where: {
                order_uuid: body.order_uuid,
              },
              select: {
                id: true,
              },
            });

            if (duplicateOrder) {
              throw new Error("Order uuid already exists.");
            }
          }

          const orderNo = await allocateNextOrderNumber(tx, orderDate);

          const createdOrder = await tx.iM.create({
            data: {
              docid: orderNo,
              buyer_customeruser_id: body.buyer_customeruser_id,
              status: mapAdminVerifyStatusToOrderStatus(body.admin_verify_status),
              im: body.im_no,
              type: 'inv',
              customer_invoice_address_id: body.invoice_address_id,
              shipping_address_id: body.shipping_address_id,
              payment_status: body.payment_status,
              log_payment: loggedAt,
              ...(body.order_uuid ? { order_uuid: body.order_uuid } : {}),
              created_at: orderDate,
              updated_at: loggedAt,
              update_by: body.admin_updated_by,
              admin_updated_at: loggedAt,
              order_created_by: body.order_created_by,
              contact_id: body.contact_id,
              company_id: body.company_id,
              credit_terms_day: body.credit_terms_day,
              shipping_cost: body.shipping_cost,
              admin_verify_status: body.admin_verify_status,
              payment_invoice_no: body.payment_invoice_no,
              is_admin_order_created: true,
              payment_method_type: body.payment_method_type,
            },
            select: {
              id: true,
              order_uuid: true,
              docid: true,
              admin_verify_status: true,
              im: true,
              shipping_cost: true,
            },
          });

          if (body.billing_items.length > 0) {
            await tx.im_goods.createMany({
              data: body.billing_items.map((item) =>
                mapOrderItemToImGoods(
                  createdOrder.id,
                  item,
                  loggedAt,
                  body.admin_updated_by,
                ),
              ),
            });
          }

          const createdItems = await tx.im_goods.findMany({
            where: {
              docid: createdOrder.id,
            },
            select: {
              product_option_id: true,
              qty: true,
              itemstatus: true,
              MR: true,
              location: true,
              Owner: true,
              exp: true,
              lot: true,
              io_qty: true,
              users_id: true,
              sale_price: true,
              order_price: true,
              admin_updated_at: true,
              is_free: true,
              promotion_from_product_option_id: true,
            },
          });

          return {
            id: createdOrder.id,
            order_uuid: createdOrder.order_uuid,
            order_no: createdOrder.docid,
            admin_verify_status: createdOrder.admin_verify_status,
            im_no: createdOrder.im,
            shipping_cost: createdOrder.shipping_cost,
            billing_items: createdItems.map(mapImGoodsToOrderItemResponse),
            logged_at: body.logged_at,
          };
        });

        return {
          message: "Order create success",
          data: result,
        };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        set.status =
          errorMessage === "Order uuid already exists."
            ? 409
            : errorMessage === "Monthly order number limit exceeded."
              ? 422
              : 500;
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        order_uuid: t.Optional(t.Nullable(t.String())),
        buyer_customeruser_id: t.String(),
        admin_updated_by: t.Optional(t.Nullable(t.String())),
        admin_verify_status: t.String(),
        im_no: t.Optional(t.Nullable(t.String())),
        credit_terms_day: t.Any(),
        shipping_address_id: t.Number(),
        shipping_cost: t.Optional(t.Nullable(t.Number())),
        payment_method_type: t.Optional(t.Nullable(t.String())),
        order_type: t.Optional(t.Nullable(t.String())),
        invoice_address_id: t.Optional(t.Nullable(t.Number())),
        payment_status: t.Optional(t.Nullable(t.String())),
        payment_invoice_no: t.Optional(t.Nullable(t.String())),
        order_created_by: t.Optional(t.Nullable(t.String())),
        contact_id: t.Optional(t.Nullable(t.Number())),
        company_id: t.Optional(t.Nullable(t.Number())),
        billing_items: t.Array(
          t.Object({
            product_option_id: t.Number(),
            order_product_quantity: t.Number(),
            item_status: t.Optional(t.Nullable(t.String())),
            mr_code: t.Optional(t.Nullable(t.String())),
            localtion_code: t.Optional(t.Nullable(t.String())),
            product_owner: t.Optional(t.Nullable(t.String())),
            expire_date: t.Optional(t.Nullable(t.String())),
            lot_code: t.Optional(t.Nullable(t.String())),
            sale_price: t.Number(),
            order_price: t.Number(),
            waiting_out_quantity: t.Optional(t.Nullable(t.Number())),
            is_free: t.Boolean(),
            promotion_from_product_option_id: t.Optional(t.Nullable(t.Number())),
            invoice_id_mat_in: t.Optional(t.Nullable(t.String())),
            stock_age: t.Optional(t.Nullable(t.String())),
          })
        ),
        logged_at: t.Optional(t.Nullable(t.String())),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Orders - Create Order",
        description: `
          This endpoint creates order header and billing items in one transaction.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
      },
    },
  )
  .post(
    "/orders-update/submit",
    async ({ headers, set, body }) => {
      try {
        const loggedAt = parseNullableDateTime(body.logged_at);

        const result = await prisma.$transaction(async (tx) => {
          const existingOrder = await tx.iM.findFirst({
            where: {
              order_uuid: body.order_uuid,
            },
            select: {
              id: true,
              order_uuid: true,
              docid: true,
            },
          });

          if (!existingOrder) {
            throw new Error("Not found IM order.");
          }

          const updatedOrder = await tx.iM.update({
            where: {
              id: existingOrder.id,
            },
            data: {
              admin_verify_status: body.admin_verify_status,
              update_by: body.admin_updated_by,
              status: mapAdminVerifyStatusToOrderStatus(
                body.admin_verify_status
              ),
              im: body.im_no,
              shipping_cost: body.shipping_cost,
              shipping_address_id: body.shipping_address_id,
              customer_invoice_address_id: body.invoice_address_id,
              payment_invoice_no: body.payment_invoice_no,
              log_payment: loggedAt,
              updated_at: loggedAt,
              admin_updated_at: loggedAt,
              credit_terms_day: body.credit_terms_day,

            },
            select: {
              id: true,
              order_uuid: true,
              docid: true,
              admin_verify_status: true,
              im: true,
              shipping_cost: true,
              buyer_customeruser_id: true,
            },
          });

          await tx.im_goods.deleteMany({
            where: {
              docid: existingOrder.id,
            },
          });

          if (body.billing_items.length > 0) {
            await tx.im_goods.createMany({
              data: body.billing_items.map((item) =>
                mapOrderItemToImGoods(
                  existingOrder.id,
                  item,
                  loggedAt,
                  body.admin_updated_by,
                ),
              ),
            });
          }

          const updatedItems = await tx.im_goods.findMany({
            where: {
              docid: existingOrder.id,
            },
            select: {
              product_option_id: true,
              qty: true,
              itemstatus: true,
              MR: true,
              location: true,
              Owner: true,
              exp: true,
              lot: true,
              io_qty: true,
              users_id: true,
              sale_price: true,
              order_price: true,
              admin_updated_at: true,
              is_free: true,
              promotion_from_product_option_id: true,
            },
          });

          return {
            id: updatedOrder.id,
            order_uuid: updatedOrder.order_uuid,
            order_no: updatedOrder.docid,
            admin_verify_status: updatedOrder.admin_verify_status,
            im_no: updatedOrder.im,
            shipping_cost: updatedOrder.shipping_cost,
            billing_items: updatedItems.map(mapImGoodsToOrderItemResponse),
            logged_at: body.logged_at,
          };
        });

        return {
          message: "Order update success",
          data: result,
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = errorMessage === "Not found IM order." ? 404 : 500;
        return { message: errorMessage };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        order_uuid: t.String(),
        credit_terms_day: t.Any(),
        admin_verify_status: t.String(),
        admin_updated_by: t.String(),
        im_no: t.Optional(t.Nullable(t.String())),
        shipping_cost: t.Optional(t.Nullable(t.Number())),
        shipping_address_id: t.Number(),
        invoice_address_id: t.Number(),
        payment_invoice_no: t.Optional(t.Nullable(t.String())),
        billing_items: t.Array(
          t.Object({
            product_option_id: t.Number(),
            order_product_quantity: t.Number(),
            item_status: t.Optional(t.Nullable(t.String())),
            mr_code: t.Optional(t.Nullable(t.String())),
            localtion_code: t.Optional(t.Nullable(t.String())),
            product_owner: t.Optional(t.Nullable(t.String())),
            expire_date: t.Optional(t.Nullable(t.String())),
            lot_code: t.Optional(t.Nullable(t.String())),
            sale_price: t.Number(),
            order_price: t.Number(),
            waiting_out_quantity: t.Optional(t.Nullable(t.Number())),
            is_free: t.Boolean(),
            promotion_from_product_option_id: t.Optional(t.Nullable(t.Number())),
            invoice_id_mat_in: t.Optional(t.Nullable(t.String())),
            stock_age: t.Optional(t.Nullable(t.String())),
          })
        ),
        logged_at: t.Optional(t.Nullable(t.String())),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Orders - Update Order",
        description: `
          This endpoint updates order header and billing items by order UUID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/payment-information",
    async({ headers, set, body}) => {
      try{
        const payment_invoice_no = body.payment_invoice_no;
        const response = await prisma.order_billing_payment_response.findFirst({
          where: {
            invoice_no: payment_invoice_no
          },
          select: {
            invoice_no: true,
            amount: true,
            currency_code: true,
            tran_ref: true,
            reference_no: true,
            payment_agent_code: true,
            payment_channel_code: true,
            datetime: true,
            response_code: true,
            response_description: true,
            card_info: true
          }
        })
        if(!response){
          set.status = 404;
          return { message: "Failed to get payment information" }
        }
        return response
      } catch (error) {
        set.status = 500;
        return { message: error }
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        payment_invoice_no: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Payment Information - Find By Invoice No.",
        description: `
          This endpoint use to get payment information with invoice no.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/customers/search",
    async({ headers, set, body}) => {
      try{
        const search = body.search;
        const response = await prisma.vw_customer_information.findMany({
          where : {
            pdpa_accepted: true,
            OR: [
              {
                fullname_th: {
                  contains: search
                }
              },
              {
                phone_no: {
                  contains: search
                }
              }
            ]
          },
          select: {
            user_id: true,
            auth_id: true,
            member_no: true,
            gender: true,
            prefix_th: true,
            fullname_th: true,
            email: true,
            birthday: true,
            phone_no: true,
            tier: true,
          }
        })
        return response;

      }catch (error) {
        set.status = 500;
        return { message: error }
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        search: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Payment Information - Find By Invoice No.",
        description: `
          This endpoint use to get payment information with invoice no.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/invoice-head/planetone/search",
    async({ headers, set, body})=>{
      try{
        const search = body.search;
        
        const response = await prisma.invoicehead.findMany({
          where: {
            OR: [
              {
                Entity_ID: {
                  contains: search
                }
              },
              {
                Entity_Name: {
                  contains: search
                }
              },
              {
                Province: {
                  contains: search
                }
              },
              {
                PostCode: {
                  contains: search
                }
              },
              {
                Branch_Tax_ID: {
                  contains: search
                }
              },
              {
                Branch_Tax_Name: {
                  contains: search
                }
              }
            ]
            
          },
          select: {
            id: true,
            Entity_ID: true,
            Entity_Name: true,
            Address1: true,
            Address2: true,
            Province: true,
            Country: true,
            PostCode: true,
            Tax_Number: true,
            Branch_Tax_ID: true,
            Branch_Tax_Name: true,
          },
        });
        if(!response){
          set.status = 404;
          return { message: "Failed to get invoice head." }
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message : error }
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        search: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Invoice Head - PlanetOne",
        description: `
          This endpoint use to get invoice head from planetone system.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/invoice-address/:customeruser_id",
    async({ headers, set, params}) => {
      try{
        const response = await prisma.customer_invoice_address.findMany({
          where: {
            invoicehead_id: {
              not: null
            },
            customeruser_id: params.customeruser_id,
          },
          select: {
            id: true,
            invoicehead: {
              select: {
                company_name: true,
                Entity_ID: true,
                Entity_Name: true,
                Address1: true,
                Address2: true,
                Province: true,
                Country: true,
                PostCode: true,
                Tax_Number: true,
                Branch_Tax_Name: true,
                Branch_Tax_ID: true,
              }
            }
          }
        });

        if(!response){
          set.status = 404;
          return { message: "Failed to get invoice address from planetone." }
        }

        return response;
      } catch (error) {
        set.status = 500;
        return { message: error }
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
        summary: "Invoice Address - PlanetOne",
        description: `
          This endpoint use to get invoice head from planetone system.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )