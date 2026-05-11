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
    async ({ headers, set }) => {
      try {
        const response = await prisma.brands.findMany();

        if (!response) {
          set.status = 404;
          return { message: "No valid brands found" };
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
          orderBy:{
            brand_name: "asc",
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid brands found" };
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
        
        if (!response) {
          set.status = 400;
          return { message: "Failed to create brand" };
        }

        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
    async ({ headers, params, body, set }) => {
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

        if (!response) {
          set.status = 400;
          return { message: "Failed to update brand" };
        }

        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
        set.status = 500;
        return { message: "Internal server error" };
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
    "/categories",
    async ({ headers, set }) => {
      try {
        const response = await prisma.categories.findMany({
          where : {
            is_active : true,
            level: 0,
          },
          select: {
            id: true,
            name: true,
            slug: true,
            children: {
              where: {
                is_active: true,
                level: 1,
              },
              select: {
                id: true,
                name: true,
                slug: true,
                children: {
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
            }
          },
          orderBy: {
            id: "asc",
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid categories found" };
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Categories - Find All",
        description: `
          This endpoint retrieves all valid categories in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .post(
    "/categories",
    async ({ headers, body, set }) => {
      try {
        const { name, slug, parent_id } = body;

        if(!parent_id){
          // Added new category with level 0
          const countLevel = await prisma.categories.count({
            where : {
              level : 0,
            }
          });

          await prisma.categories.create({
            data: {
              id : `cat_00${countLevel + 1}`,
              name : name,
              slug : slug,
              level : 0,
              is_active : true,
              created_at : now,
            },
          });
        }else{
          // Added new category with level 1 or level 2
          const parentCategory = await prisma.categories.findUnique({
            where: {
              id: parent_id,
            },
          });

          if (!parentCategory) {
            set.status = 400;
            return { message: "Parent category not found" };
          }

          const level = parentCategory.level + 1;
          const countLevel = await prisma.categories.count({
            where : {
              level : level,
            }
          });

          await prisma.categories.create({
            data: {
              id : `cat_${level}1${countLevel + 1}`,
              name : name,
              slug : slug,
              parent_id : parent_id,
              ancestors: parentCategory.ancestors ? [...parentCategory.ancestors, parent_id] : [parent_id],
              level : level,
              is_active : true,
              created_at : now,
            },
          });
        }

        return { message: "Category created successfully" };
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
        summary: "Categories - Create",
        description: `
          This endpoint creates a new category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .put(
    "/categories/:category_id",
    async ({ headers, params, body, set }) => {
      try {
        const { category_id } = params;
        const { name, slug, parent_id, is_active } = body;

        const category = await prisma.categories.findUnique({
          where: {
            id: category_id,
          },
        });

        if (!category) {
          set.status = 404;
          return { message: "Category not found" };
        }

        await prisma.categories.update({
          where: {
            id: category_id,
          },
          data: {
            name : name,
            slug : slug,
            parent_id : parent_id,
            is_active : is_active,
            updated_at : now,
          },
        });

        return { message: "Category updated successfully" };
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
        summary: "Categories - Update",
        description: `
          This endpoint updates a category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      }
    },
  )
  .delete(
    "/categories/:category_id",
    async ({ headers, params, set }) => {
      try {
        const { category_id } = params;

        const category = await prisma.categories.findUnique({
          where: {
            id: category_id,
          },
        });

        if (!category) {
          set.status = 404;
          return { message: "Category not found" };
        }

        await prisma.categories.delete({
          where: {
            id: category_id,
          },
        });

        return { message: "Category deleted successfully" };
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
        summary: "Categories - Delete",
        description: `
          This endpoint deletes a category in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["3NConnect"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    '/companies',
    async ({ headers, set }) => {
      try {
        const response = await prisma.companies.findMany({
          orderBy:{
            company_name: "asc",
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid companies found" };
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
    '/companies/active',
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
          orderBy:{
            company_name: "asc",
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid companies found" };
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
            company_image : company_image,
            url_image : url_image,
            company_name : company_name,
            is_active : is_active,
            created_at : now,
          },
        });
        
        if (!response) {
          set.status = 400;
          return { message: "Failed to create company" };
        }

        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
            company_image : company_image,
            url_image : url_image,
            company_name : company_name,
            is_active : is_active,
            updated_at : now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update company" };
        }

        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
      }
    }
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
        set.status = 500;
        return { message: "Internal server error" };
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
    "/products",
    async ({ headers, set }) => {
      try {
        const response = await prisma.products.findMany({
          select : {
            id: true,
            product_name: true,
            product_description: true,
            online_price: true,
            brand_id: true,
            category_id: true,
            company_id: true,
            is_active: true,
            is_online_active: true,
            mat_identity: true,
            mat_unit_identity: true,
            min_price: true,
            unit: true,
            created_at: true,
            updated_at: true,
            brands: {
              select: {
                brand_name: true,
              }
            },
            categories: {
              select: {
                name: true,
              }
            },
            companies: {
              select: {
                company_name: true,
              }
            },
            product_images: {
              select: {
                id: true,
                url_image: true,
                is_show: true,
              }
            },
          }
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }
        return response;
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
    "/products",
    async ({ headers, body, set }) => {
      try {
        const { product_name, product_description, online_price, brand_id, category_id, company_id, images, is_active, is_online_active, mat_identity, mat_unit_identity, min_price, unit } = body;

        const get_category = await prisma.categories.findUnique({
          where: {
            id: category_id,
          },
          select: {
            id: true,
            ancestors: true,
          }
        });

        if (!get_category) {
          set.status = 400;
          return { message: "Category not found" };
        }

        const category_hierarchy = get_category.ancestors ? [...get_category.ancestors, get_category.id] : [get_category.id];

        const response = await prisma.products.create({
          data: {
            product_name : product_name,
            product_description : product_description,
            online_price : online_price || 0,
            brand_id : brand_id,
            category_id: category_id,
            category_hierarchy : category_hierarchy,
            company_id : company_id,
            is_active : is_active,
            is_online_active : is_online_active,
            mat_identity : mat_identity,
            mat_unit_identity : mat_unit_identity,
            min_price : min_price || 0,
            unit : unit,
            created_at : now,
          },
          select: {
            id: true,
          }
        });
        
        if (!response) {
          set.status = 400;
          return { message: "Failed to create product" };
        }

        await Promise.all(images.map((image: { image_url: string; is_main: boolean }) => {
          return prisma.product_images.create({
            data: {
              product_id: response.id,
              url_image: image.image_url,
              is_show: image.is_main,
              created_at: now,
            },
          });
        }));

        return { message: "Product created successfully" };
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
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
        images: t.Array(
          t.Object({
            image_url : t.String(),
            is_main: t.Boolean(),
          })
        ),
        is_active: t.Boolean(),
        is_online_active: t.Boolean(),
        mat_identity: t.String(),
        mat_unit_identity: t.String(),
        min_price: t.Any(),
        online_price: t.Number(),
        product_description: t.String(),
        product_name: t.String(),
        unit: t.String(),
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
        const { product_name, product_description, online_price, brand_id, category_id, company_id, images, is_active, is_online_active, mat_identity, mat_unit_identity, min_price, unit } = body;

        const get_category = await prisma.categories.findUnique({
          where: {
            id: category_id,
          },
          select: {
            id: true,
            ancestors: true,
          }
        });

        if (!get_category) {
          set.status = 400;
          return { message: "Category not found" };
        }

        const category_hierarchy = get_category.ancestors ? [...get_category.ancestors, get_category.id] : [get_category.id];

        const response = await prisma.products.update({
          where: {
            id: Number(product_id),
          },
          data: {
            product_name : product_name,
            product_description : product_description,
            online_price : online_price,
            brand_id : brand_id,
            category_id: category_id,
            category_hierarchy : category_hierarchy,
            company_id : company_id,
            is_active : is_active,
            is_online_active : is_online_active,
            mat_identity : mat_identity,
            mat_unit_identity : mat_unit_identity,
            min_price : min_price || 0,
            unit : unit,
            updated_at : now,
          },
        });

        if (!response) {
          set.status = 400;
          return { message: "Failed to update product" };
        }

        await prisma.product_images.deleteMany({
          where: {
            product_id: Number(product_id),
          },
        });

        await Promise.all(images.map((image: { image_url: string; is_main: boolean }) => {
          return prisma.product_images.create({
            data: {
              product_id: Number(product_id),
              url_image: image.image_url,
              is_show: image.is_main,
              created_at: now,
            },
          });
        }));

        return { message: "Product updated successfully" };
      } catch (error) {
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),  
      }),
      params: t.Object({
        product_id: t.String(),
      }),
      body: t.Object({
        brand_id: t.Number(),
        category_id: t.String(),
        company_id: t.Number(),
        images: t.Array(
          t.Object({
            image_url : t.String(),
            is_main: t.Boolean(),
          })
        ),
        is_active: t.Boolean(),
        is_online_active: t.Boolean(),
        mat_identity: t.String(),
        mat_unit_identity: t.String(),
        min_price: t.Any(),
        online_price: t.Number(),
        product_description: t.String(),
        product_name: t.String(),
        unit: t.String(),
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
      }
    }
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
        set.status = 500;
        return { message: "Internal server error" };
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

