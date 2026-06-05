import { Elysia, t } from "elysia";
import { prisma } from "./prisma_connection";
import { auth } from "../plugins/auth";
import "dotenv/config";
import { createClient } from '@supabase/supabase-js'

const now: Date = new Date();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key in environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const publicRoute = new Elysia({
  prefix: "/api/publics",
})
  // .use(auth())
  .post(
    '/supabase/signup',
    async ({ body, set }) => {
      const { email, password, name } = body

      // 2. เรียกใช้งาน Supabase Auth เพื่อสมัครสมาชิก
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // สามารถใส่ข้อมูลเพิ่มเติมใน user_metadata ได้ (เช่น ชื่อ, เบอร์โทร)
          data: {
            display_name: name
          }
        }
      })

      if (error) {
        set.status = error.status || 400
        return {
          success: false,
          message: error.message
        }
      }

      // 4. ส่งผลลัพธ์กลับเมื่อสำเร็จ
      set.status = 201 // Created
      return {
        success: true,
        message: 'Registration successful! Please check your email for confirmation.',
        user: {
          id: data.user?.id,
          email: data.user?.email,
          metadata: data.user?.user_metadata
        }
      }
    }, 
    {
      // ใช้ TypeBox (t) ของ Elysia ในการตรวจข้อมูลที่ส่งเข้ามา (DTO Validation)
      body: t.Object({
        email: t.String({ format: 'email' }),
        password: t.String({ minLength: 6 }),
        name: t.Optional(t.String())
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Supabase - Sign Up",
        description: `
          This endpoint signs up a user with Supabase.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .post(
    '/supabase/signin',
    async ({ body, set }) => {
      const { email, password } = body

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        set.status = error.status || 400
        return {
          success: false,
          message: error.message
        }
      }

      set.status = 200
      return {
        success: true,
        message: 'Login successful!',
        user: {
          id: data.user?.id,
          email: data.user?.email,
          metadata: data.user?.user_metadata,
          access_token: data.session?.access_token,
          token_type: data.session?.token_type,
          expires_in: data.session?.expires_in,
          expires_at: data.session?.expires_at
        }
      }
    },
    {
      body: t.Object({
        email: t.String({ format: 'email' }),
        password: t.String({ minLength: 6 })
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Supabase - Sign In",
        description: `
          This endpoint signs in a user with Supabase.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },    
  )
  .get(
    "/products/flashsale",
    async ({ set }) => {
      try { 
        const flashsale_detail = await prisma.promotions.findFirst({
          where: {
            promotion_type: 'flash_sale',
            is_active: true,
            promotion_start: {
              lte: now
            },
            promotion_end: {
              gte: now
            }
          },
          select: {
            id: true,
            promotion_name: true,
            promotion_start: true,
            promotion_end: true,
          }
        });

        if(!flashsale_detail){
          return {
            success: true,
            message: 'No active flash sale',
            data: {
              detail: null,
              products: []
            }
          }
        }
        
        const promotion_id = flashsale_detail?.id;
        const flashsale_products = await prisma.vw_promotion_products_index.findMany({
          where: {
            promotion_id: promotion_id,
            promotion_type: 'flash_sale'
          },
          select:{
            product_option_id: true,
            product_name: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            url_image: true,
          },
          orderBy: {
            sale_percent: 'desc'
          }
        });

        return {
          success: true,
          message: 'Flash sale products',
          data: {
            detail: flashsale_detail,
            products: flashsale_products
          }
        }
      } catch (error) {
        set.status = 500
        return {
          success: false,
          message: 'Internal server error'
        }
      }
    },
    {
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Flash Sale",
        description: `
          This endpoint gets flash sale products.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .get(
    "/products",
    async ({ set }) => {
      try { 
        const products = await prisma.vw_promotion_products_index.findMany({
          where: {
            promotion_type: {
              not: 'flash_sale'
            }
          },
          select: {
            mat_identity: true,
            product_name: true,
            promotion_type: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            product_option_id: true,
            url_image: true,
          },
          orderBy: {
            promotion_type: 'desc'
          }
        });

        return {
          success: true,
          message: 'Products',
          data: {
            products: products
          }
        }
      } catch (error) {
        set.status = 500
        return {
          success: false,
          message: 'Internal server error'
        }
      }
    },
    {
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - List",
        description: `
          This endpoint gets products.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .get(
    "/product-categories/active",
    async ({ set }) => {
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
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Product Categories - Find All Active",
        description: `
          This endpoint retrieves all active product categories in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
  .get(
    "/products/:product_option_id",
    async ({ params, set }) => {
      try {
        const product_option_id = params.product_option_id;
        const responseProductOption = await prisma.product_options.findFirst({
          where: {
            id: product_option_id
          },
          select: {
            product_id: true
          }
        });

        if (!responseProductOption) {
          set.status = 404;
          return { message: "No valid product option found" };
        }

        const productId = responseProductOption.product_id!;

        const response = await prisma.products.findFirst({
          where: {
            id: productId,
          },
          select: {
            id: true,
            product_name: true,
            unit: true,
            product_description: true,
            condition_description: true,
            warranty_description: true,
            video_product: true,
            youtube_url: true,
            product_categories: {
              select : {
                name: true
              }
            },
            product_images: {
              select: {
                url_image: true
              },
              orderBy: {
                is_show: "desc"
              }
            }
          },
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
        }

        const promoteProductIndex = await prisma.vw_promotion_products_index.findMany({
            where: {
              product_id: productId
            },
            select: {
              product_option_id: true,
              option_name: true,
              promotion_type: true,
              online_price: true,
              sale_price: true,
              sale_percent: true,
              mat_identity: true,
            }
          });

        if(promoteProductIndex.length === 0){
          return {
            ...response,
            product_options: []
          };
        }

        for (const item of promoteProductIndex) {
          const stock = await prisma.vw_planetone_stocks.findFirst({
            where: {
              MATUnit: {
                startsWith: item.mat_identity!
              }
            },
            select: {
              qty_total: true
            }
          });
          (item as any).qty_total = stock?.qty_total || 0;
        }

        const result = {
          ...response,
          product_options: promoteProductIndex ?? []
        }
        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching product:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        product_option_id: t.Number(),
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