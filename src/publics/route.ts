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
  // Products
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
            promotion_name: true,
            promotion_start: true,
            promotion_end: true,
          }
        });

        const flashsale_products = await prisma.vw_flashsale_products_list.findMany({
          where: {
            promotion_start: flashsale_detail?.promotion_start,
            promotion_end: flashsale_detail?.promotion_end
          },
          select:{
            product_option_id: true,
            product_name: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            url_image: true,
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
