import { Elysia, t } from "elysia";
import { prisma } from "./prisma_connection";
import { auth } from "../plugins/auth";
import "dotenv/config";
import { linkSymbols } from "bun:ffi";
import { dmmfToRuntimeDataModel } from "@prisma/client/runtime/client";

const now: Date = new Date();
// const utc7: Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

export const ecommerceRoute = new Elysia({
  prefix: "/api/ecommerce",
})
  .use(auth())
  .get(
    "/brands",
    async ({ headers, set }) => {
      try {
        const response = await prisma.brands.findMany();

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
        const response = await prisma.brands.findMany({
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
        const response = await prisma.brands.create({
          data: {
            brand_image: brand_image,
            url_image: url_image,
            brand_name: brand_name,
            country_id: country_id,
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
        const response = await prisma.brands.update({
          where: {
            id: Number(brand_id),
          },
          data: {
            brand_image: brand_image,
            url_image: url_image,
            brand_name: brand_name,
            country_id: country_id,
            is_active: is_active,
            updated_at: now,
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
        const response = await prisma.brands.delete({
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
        const response = await prisma.product_categories.findMany({
          where: {
            level: 0,
          },
          select: {
            id: true,
            name: true,
            slug: true,
            other_product_categories: {
              where: {
                level: 1,
              },
              select: {
                id: true,
                name: true,
                slug: true,
                other_product_categories: {
                  where: {
                    level: 2,
                  },
                  select: {
                    id: true,
                    name: true,
                    slug: true,
                  },
                },
              },
            },
          },
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
        const response = await prisma.product_categories.findMany({
          where: {
            is_active: true,
            level: 0,
          },
          select: {
            id: true,
            name: true,
            slug: true,
            other_product_categories: {
              where: {
                is_active: true,
                level: 1,
              },
              select: {
                id: true,
                name: true,
                slug: true,
                other_product_categories: {
                  where: {
                    is_active: true,
                    level: 2,
                  },
                  select: {
                    id: true,
                    name: true,
                    slug: true,
                  },
                },
              },
            },
          },
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
  .post(
    "/product-categories",
    async ({ headers, body, set }) => {
      try {
        const { name, slug, parent_id } = body;

        if (!parent_id) {
          // Added new category with level 0
          const countLevel = await prisma.product_categories.count({
            where: {
              level: 0,
            },
          });

          await prisma.product_categories.create({
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
          const parentCategory = await prisma.product_categories.findUnique({
            where: {
              id: parent_id,
            },
          });

          if (!parentCategory) {
            set.status = 400;
            return { message: "Parent productcategory not found" };
          }

          const level = parentCategory.level + 1;
          const countLevel = await prisma.product_categories.count({
            where: {
              level: level,
            },
          });

          await prisma.product_categories.create({
            data: {
              id: `cat_${level}1${countLevel + 1}`,
              name: name,
              slug: slug,
              parent_id: parent_id,
              ancestors: parentCategory.ancestors
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

        const category = await prisma.product_categories.findUnique({
          where: {
            id: category_id,
          },
        });

        if (!category) {
          set.status = 404;
          return { message: "Product category not found" };
        }

        await prisma.product_categories.update({
          where: {
            id: category_id,
          },
          data: {
            name: name,
            slug: slug,
            parent_id: parent_id,
            is_active: is_active,
            updated_at: now,
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

        const category = await prisma.product_categories.findUnique({
          where: {
            id: category_id,
          },
        });

        if (!category) {
          set.status = 404;
          return { message: "Product category not found" };
        }

        await prisma.product_categories.delete({
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
        const response = await prisma.companies.findMany({
          orderBy: {
            company_name: "asc",
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
        const response = await prisma.companies.findMany({
          where: {
            is_active: true,
          },
          select: {
            id: true,
            company_name: true,
          },
          orderBy: {
            company_name: "asc",
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
        const { company_image, url_image, company_name, is_active } = body;
        const response = await prisma.companies.create({
          data: {
            company_image: company_image,
            url_image: url_image,
            company_name: company_name,
            is_active: is_active,
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
        company_name: t.String(),
        is_active: t.Boolean(),
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
        const { company_image, url_image, company_name, is_active } = body;
        const response = await prisma.companies.update({
          where: {
            id: Number(company_id),
          },
          data: {
            company_image: company_image,
            url_image: url_image,
            company_name: company_name,
            is_active: is_active,
            updated_at: now,
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
        company_name: t.String(),
        is_active: t.Boolean(),
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
        const response = await prisma.companies.delete({
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
        const response = await prisma.countries.findMany({
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
        const response = await prisma.countries.findMany({
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
        const response = await prisma.countries.create({
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
        const response = await prisma.countries.update({
          where: {
            id: Number(country_id),
          },
          data: {
            country_name: country_name,
            short_name: short_name || null,
            is_active: is_active,
            updated_at: now,
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
        const response = await prisma.countries.delete({
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
        const response = await prisma.products.findMany({
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
                company_name: true,
              },
            },
            product_images: {
              select: {
                id: true,
                url_image: true,
                is_show: true,
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
                qr_code_promptpay: true,
                visa_card: true,
                mobile_banking: true,
                credit_terms: true,
              },
            },
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
    "/products/active",
    async ({ headers, set }) => {
      try {
        const response = await prisma.products.findMany({
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
            categories: {
              select: {
                name: true,
              },
            },
            companies: {
              select: {
                company_name: true,
              },
            },
            product_images: {
              select: {
                url_image: true,
              },
              where: {
                is_show: true,
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
                qr_code_promptpay: true,
                visa_card: true,
                mobile_banking: true,
                credit_terms: true,
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
        const response = await prisma.products.findFirst({
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
            product_images: {
              select: {
                id: true,
                url_image: true,
                is_show: true,
              },
            },
            video_product: true,
            condition_description: true,
            warranty_description: true,
            youtube_url: true,
            is_active: true,
            is_online_active: true,
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
                qr_code_promptpay: true,
                visa_card: true,
                mobile_banking: true,
                credit_terms: true,
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
        const count = await prisma.products.count({
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

        const get_category = await prisma.product_categories.findUnique({
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

        const category_hierarchy = get_category.ancestors
          ? [...get_category.ancestors, get_category.id]
          : [get_category.id];

        const response = await prisma.products.create({
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
              return prisma.product_images.create({
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
              return prisma.product_options.create({
                data: {
                  product_id: response.id,
                  row_no: option.row_no,
                  mat_identity: option.mat_id,
                  option_name: option.option_name,
                  online_price: option.online_price,
                  min_price: option.min_price,
                  created_at: now,
                },
              });
            }),
          );
        }

        if (payment_methods) {
          await prisma.product_payment_method.create({
            data: {
              product_id: response.id,
              qr_code_promptpay: payment_methods.qr_promptpay,
              visa_card: payment_methods.visa_card,
              mobile_banking: payment_methods.mobile_banking,
              credit_terms: payment_methods.credit_terms,
              created_at: now,
            },
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
            row_no: t.Number(),
            mat_id: t.String(),
            option_name: t.Any(),
            online_price: t.Any(),
            min_price: t.Any(),
          }),
        ),
        payment_methods: t.Object({
          qr_promptpay: t.Boolean(),
          visa_card: t.Boolean(),
          mobile_banking: t.Boolean(),
          credit_terms: t.Boolean(),
        }),
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
        const count = await prisma.products.count({
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

        const get_category = await prisma.product_categories.findUnique({
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

        const category_hierarchy = get_category.ancestors
          ? [...get_category.ancestors, get_category.id]
          : [get_category.id];

        const response = await prisma.products.update({
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
          const existingImages = await prisma.product_images.findMany({
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
                prisma.product_images.create({
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
                prisma.product_images.update({
                  where: { id: image.id },
                  data: {
                    url_image: image.image_url,
                    is_show: image.is_main,
                    updated_at: now,
                  },
                })
              )
            );
          }

          if (imagesToDelete.length > 0) {
            await prisma.product_images.deleteMany({
              where: {
                id: { in: imagesToDelete.map(img => img.id) },
              },
            });
          }
                    
        }

        // TODO : compare with existing product options and update/delete/add
        if (options && options.length > 0) {
          const existingOptions = await prisma.product_options.findMany({
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
                prisma.product_options.create({
                  data: {
                    product_id: product_id,
                    row_no: option.row_no,
                    mat_identity: option.mat_id,
                    option_name: option.option_name,
                    online_price: option.online_price,
                    min_price: option.min_price,
                    created_at: now,
                  },
                })
              )
            );
          }

          if (optionsToUpdate.length > 0) {
            await Promise.all(
              optionsToUpdate.map((option: any) =>
                prisma.product_options.update({
                  where: { id: option.id },
                  data: {
                    row_no: option.row_no,
                    mat_identity: option.mat_id,
                    option_name: option.option_name,
                    online_price: option.online_price,
                    min_price: option.min_price,
                    updated_at: now,
                  },
                })
              )
            );
          }

          if (optionsToDelete.length > 0) {
            await prisma.product_options.deleteMany({
              where: {
                id: { in: optionsToDelete.map(opt => opt.id) },
              },
            });
          }
        }

        await prisma.product_payment_method.updateMany({
          where: {
            product_id: product_id,
          },
          data: {
            qr_code_promptpay: payment_methods.qr_promptpay,
            visa_card: payment_methods.visa_card,
            mobile_banking: payment_methods.mobile_banking,
            credit_terms: payment_methods.credit_terms,
            updated_at: now,
          },
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
            min_price: t.Any(),
          })
        ),
        payment_methods: t.Object({
          credit_terms: t.Boolean(),
          mobile_banking: t.Boolean(),
          qr_promptpay: t.Boolean(),
          visa_card: t.Boolean(),
        }),
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
        const { online_price, min_price } = body;
        
        const response = await prisma.product_options.update({
          where: {
            id: product_options_id,
          },
          data: {
            online_price: online_price,
            min_price: min_price,
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
        min_price: t.Number(),
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
        const get_category = await prisma.product_categories.findUnique({
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

        const category_hierarchy = get_category.ancestors
          ? [...get_category.ancestors, get_category.id]
          : [get_category.id];

        const response = await prisma.products.update({
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

        await prisma.product_payment_method.updateMany({
          where : {
            product_id: response.id
          },
          data : {
            qr_code_promptpay: payment_methods.qr_code_promptpay,
            visa_card: payment_methods.visa_card,
            mobile_banking: payment_methods.mobile_banking,
            credit_terms: payment_methods.credit_terms,
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
        const response = await prisma.products.delete({
          where: {
            id: Number(product_id),
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "Product not found" };
        }

        await prisma.product_images.deleteMany({
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
        const response = await prisma.events.findMany({
          select: {
            id: true,
            event_image: true,
            event_name: true,
            event_detail: true,
            event_startdate: true,
            event_enddate: true,
            location_name: true,
            preregister_date: true,
            register_date: true,
            ref_url: true,
            tier_preregister: true,
            tier_register: true,
            is_active: true,
            event_category_id: true,
            event_categories: {
              select: {
                event_cate_name: true,
              },
            },
          },
          orderBy: {
            event_name: "asc",
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
        const response = await prisma.events.create({
          data: {
            event_name: event_name,
            event_category_id: event_category_id,
            event_detail: event_detail,
            event_enddate: event_enddate,
            event_image: event_image,
            event_startdate: event_startdate,
            location_name: location_name,
            preregister_date: preregister_date || null,
            ref_url: ref_url,
            register_date: register_date || null,
            tier_preregister: tier_preregister,
            tier_register: tier_register,
            is_active: true,
            created_at: now,
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
        event_image: t.String(),
        event_name: t.String(),
        event_startdate: t.Date(),
        location_name: t.String(),
        preregister_date: t.Any(),
        ref_url: t.Any(),
        register_date: t.Any(),
        tier_preregister: t.Array(t.Any()),
        tier_register: t.Array(t.Any()),
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
        const response = await prisma.events.update({
          where: {
            id: Number(event_id),
          },
          data: {
            event_name: event_name,
            event_category_id: event_category_id,
            event_detail: event_detail,
            event_enddate: event_enddate,
            event_image: event_image,
            event_startdate: event_startdate,
            location_name: location_name,
            preregister_date: preregister_date || null,
            ref_url: ref_url,
            register_date: register_date || null,
            tier_preregister: tier_preregister,
            tier_register: tier_register,
            is_active: is_active,
            updated_at: now,
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
        tier_preregister: t.Array(t.Any()),
        tier_register: t.Array(t.Any()),
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
