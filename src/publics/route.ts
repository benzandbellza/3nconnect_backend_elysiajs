import { Elysia, t } from "elysia";
import { prisma } from "./prisma_connection";
import "dotenv/config";
import { createClient } from '@supabase/supabase-js'
import { mapPreOrderProducts, mapPublicEvents } from './public-model-mappers'
import { buildProductCategoryTree } from './product-category-tree'

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
        const flashsale_detail = await prisma.public_promotion.findFirst({
          where: {
            subtype: 'flash_sale',
            is_active: true,
            promotion_start: {
              lte: now
            },
            promotion_end: {
              gte: now
            },
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
            mat_identity: true,
            is_accept_overlapse_promotion: true,
            promotion_type: true,
            option_name: true,
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
            },
            is_pre_order: {
              not: true
            }
          },
          select: {
            product_id: true,
            mat_identity: true,
            product_name: true,
            promotion_type: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            product_option_id: true,
            url_image: true,
            option_name: true,
            is_accept_overlapse_promotion: true,
          },
          orderBy: {
            promotion_type: 'desc'
          }
        });

        const productIds = [
          ...new Set(
            products
              .map((product) => product.product_id)
              .filter((productId): productId is number => productId !== null),
          ),
        ];

        const paymentMethods = await prisma.public_product_payment_method.findMany({
          where: {
            product_id: { in: productIds },
          },
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
        });

        const paymentMethodsByProductId = new Map<number, typeof paymentMethods>();
        for (const paymentMethod of paymentMethods) {
          if (paymentMethod.product_id === null) continue;
          const current = paymentMethodsByProductId.get(paymentMethod.product_id) ?? [];
          if (paymentMethod.payment_methods?.is_active !== false) {
            current.push(paymentMethod);
          }
          paymentMethodsByProductId.set(paymentMethod.product_id, current);
        }

        const productsWithPaymentMethods = products.map((product) => ({
          ...product,
          product_payment_method: product.product_id === null
            ? []
            : paymentMethodsByProductId.get(product.product_id) ?? [],
        }));

        return {
          success: true,
          message: 'Products',
          data: {
            products: productsWithPaymentMethods,
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
    "/products/pre-order",
    async ({ set }) => {
      try { 
        const products = await prisma.public_products.findMany({
          where: {
            is_pre_order: true,
          },
          select: {
            product_name: true,
            unit: true,
            product_options: {
              select: {
                id: true,
                mat_identity: true,
                option_name: true,
                online_price: true,
              },
              orderBy: {
                row_no: 'asc',
              },
            },
            product_images: {
              where: {
                is_show: true,
              },
              select: {
                url_image: true,
                is_show: true,
              },
            },
          },
          orderBy: {
            product_name: 'desc'
          }
        });

        return {
          success: true,
          message: 'Products Pre-Order',
          data: {
            products: mapPreOrderProducts(products)
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
        summary: "Products PreOrder - List",
        description: `
          This endpoint gets products pre-order.
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
        return buildProductCategoryTree(response);
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
        const responseProductOption = await prisma.public_product_options.findFirst({
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

        const response = await prisma.public_products.findFirst({
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
              select : {
                id: true,
                url_image: true,
                is_show: true,
              },
              orderBy: {
                is_show: "asc"
              }
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

        const productReviews = await prisma.vw_product_reviews.findMany({
          where: {
            product_id: productId
          },
          select: {
            review_comment: true,
            admin_quote: true,
            created_at: true,
            rating: true,
          }
        });

        const result = {
          ...response,
          product_options: promoteProductIndex ?? [],
          product_reviews: productReviews ?? []
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
  .post(
    "/products/stock-inventory",
    async ({ body, set }) => {
      try {
        const { mat_identity } = body;
        const responses = [];
        for(const mat of mat_identity){
          const response = await prisma.vw_planetone_stocks.findFirst({
            where: {
              MATUnit: {
                startsWith: mat
              }
            },
            select: {
              qty_total: true,
            }
          });
          responses.push({
            mat_identity: mat,
            qty_total: response?.qty_total || 0,
          });
        }
      
        if (!responses.length) {
          set.status = 404;
          return { message: "No valid product found" };
        }

        return responses;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching product stock inventory:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        mat_identity: t.Array(t.String()),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Stock Inventory",
        description: `
          This endpoint retrieves stock inventory for a product.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .post(
    "/products/check-promotions/get-x-free-y",
    async ({ body, set }) => {
      try {
        const { product_option_id } = body;
        const response = await prisma.vw_promotion_bundle_deal_index.findMany({
          where: {
            get_product_option_id: product_option_id,
            is_accept_overlapse_promotion: true,
          }
        });
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error checking bundle deal:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        product_option_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Products - Check Bundle Deal",
        description: `
          This endpoint checks if a product is a bundle deal.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/product-categories/:category_id",
    async ({ params, set }) => {
      try {
        const { category_id } = params;
        const response = await prisma.vw_promotion_products_index.findMany({
          where: {
            category_hierarchy: {
              has: category_id
            }
          },
          orderBy: [
            {
              promotion_type: "desc"
            },
            {
              sale_percent: "desc"
            }
          ]
        });

        if (!response) {
          set.status = 404;
          return { message: "No valid products found" };
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
      params: t.Object({
        category_id: t.String(),
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
    "mycart-information",
    async ({ body, set }) => {
      try{
        const { products } = body;
        const productInformation = [];
        for(const product of products){
          const findPromotionProducts = await prisma.vw_promotion_products_index.findFirst({
            where: {
              product_option_id: product.product_option_id,
              mat_identity: product.mat_identity,
            },
            select: {
              company_id: true,
              company_name: true,
              product_name: true,
              product_option_id: true,
              online_price: true,
              sale_price: true,
              sale_percent: true,
              mat_identity: true,
              url_image: true,
              promotion_id: true,
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
              product_option_id: findPromotionProducts.product_option_id,
              product_name: findPromotionProducts.product_name,
              online_price: findPromotionProducts.online_price,
              sale_price: findPromotionProducts.sale_price,
              sale_percent: findPromotionProducts.sale_percent,
              mat_identity: findPromotionProducts.mat_identity,
              url_image: findPromotionProducts.url_image,
              promotion_id: findPromotionProducts.promotion_id,
              promotion_type: findPromotionProducts.promotion_type,
              option_name: findPromotionProducts.option_name,
              is_pre_order: findPromotionProducts.is_pre_order,
              stock_qty: stock_qty,
              company_name: findPromotionProducts.company_name,
              company_id: findPromotionProducts.company_id,
              get_x_free_y: [] as Array<any>,
              extra_points: 1 as number, // สมมติว่ามีการให้คะแนนสะสมพิเศษสำหรับโปรโมชั่นนี้
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
                    promotion_id: true,
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
                    promotion_id: deal.promotion_id,
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
                    promotion_id: true,
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
                  promotion_id: deal.promotion_id,
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
            // ไม่เจอสินค้าให้ return ค่าว่างกลับไป
            return [];
          }
        }

        return productInformation;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching mycart information:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        products: t.Array(
          t.Object({
            product_option_id: t.Number(),
            mat_identity: t.String(),
          })
        ),
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
    "/promotions/grandtotal",
    async ({ body, set }) => {
      try{
        const { grand_total } = body;

        const resGrandTotal = await prisma.vw_promotion_grandtotal_bill_index.findFirst({
          where: {
            minimum_grand_total: {
              lte: grand_total
            },
            is_accept_overlapse_promotion: true,
          },
          select: {
            bundle_deal_grand_total_tiers_id: true,
            url_promotion_image: true,
            promotion_name: true,
            level_no: true,
          },
          orderBy: {
            level_no: 'desc'
          },
        });

        if(!resGrandTotal){
          return {message: "No grand total promotions available for the given amount"};
        }

        const getFreeProduct = await prisma.vw_promotion_grandtotal_bill_index.findMany({
          where :{
            bundle_deal_grand_total_tiers_id: resGrandTotal.bundle_deal_grand_total_tiers_id
          },
          select: {
            product_option_id: true,
            product_name: true,
            option_name: true,
            online_price: true,
            free_quantity: true,
            url_image: true,
          }
        });

        if(getFreeProduct.length === 0){
          return {
            ...resGrandTotal,
            free_products: []
          }
        }



        const result = {
          ...resGrandTotal,
          free_products: getFreeProduct
        }

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching grand total promotions:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        grand_total: t.Number(),
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
    }
  )
  .post(
    "/promotions/extra-points",
    async ({ body, set }) => {
      try{
        const { grand_total } = body;

        const extraPoints = await prisma.vw_promotion_extra_points_bill_index.findFirst({
          where : {
            min_amount: {
              lte: grand_total
            },
            is_accept_overlapse_promotion: true
          },
          select: {
            url_promotion_image: true,
            promotion_name: true,
            level_no: true,
            min_amount: true,
            points_multiplier: true,
          },
          orderBy: {
            min_amount: 'desc'
          }
        });

        if(!extraPoints){
          return {message: "No extra points promotions available for the given grand total"};
        }

        return extraPoints;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching extra points promotions:", error);
        return { message: errorMessage };
      }
    },
    {
      body: t.Object({
        grand_total: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions Extra Points - Find By Grand Total",
        description: `
          This endpoint retrieves extra points promotions based on the given grand total.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .get(
    "/promotions",
    async ({ set }) => {
      try { 
        const promotions = await prisma.public_promotion.findMany({
          where: {
            is_active: true,
            promotion_start: {
              lte: now
            },
            promotion_end: {
              gte: now
            },
            subtype: {
              in : ['flash_sale', 'discount', 'bundle_deal_get_x_free_y', 'bundle_deal_grand_total_free_y', 'extra_points_bill_total', 'extra_points_products'              ]
            }
          },
          select: {
            id: true,
            url_image: true,
            promotion_type: true,
            subtype: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
          },
          orderBy: {
            promotion_start: 'asc'
          }
        });

        return {
          success: true,
          message: 'Promotions',
          data: {
            promotions: promotions
          }
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching promotions:", error);
        return { message: errorMessage };
      }
    },
    {
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find All",
        description: `
          This endpoint retrieves all promotions in the 3NConnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    }
  )
  .get(
    "/promotions/flash-sale/:promotion_id",
    async ({ params, set }) => {
      try {
        const promotion_id = params.promotion_id;

        const promotionDetail = await prisma.public_promotion.findFirst({
          where: {
            id: promotion_id,
            is_active: true,
          },
          select: {
            url_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            is_accept_overlapse_promotion: true,
          }
        });

        if(!promotionDetail){
          set.status = 404;
          return { message: "No valid flash sale promotion found" };
        }

        const flashSalePromotion = await prisma.vw_promotion_products_index.findMany({
          where: {
            promotion_id: promotion_id,
            promotion_type: 'flash_sale',
          },
          select: {
            product_option_id: true,
            url_image: true,
            product_name: true,
            option_name: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            mat_identity: true,
          },
          orderBy: {
            sale_percent: 'desc'
          }
        });

        if(!flashSalePromotion){
          set.status = 404;
          return { message: "No valid flash sale promotion found" };
        }

        return {
          ...promotionDetail, 
          products: flashSalePromotion
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching flash sale promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find Flash Sale By Promotion ID",
        description: `
          This endpoint retrieves flash sale promotion by its promotion ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/promotions/discount/:promotion_id",
    async ({ params, set }) => {
      try {
        const promotion_id = params.promotion_id;
        const promotionDetail = await prisma.public_promotion.findFirst({
          where: {
            id: promotion_id,
            is_active: true,
          },
          select: {
            url_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            is_accept_overlapse_promotion: true,
          }
        });

        if(!promotionDetail){
          set.status = 404;
          return { message: "No valid discount promotion found" };
        }

        const discountPromotion = await prisma.vw_promotion_products_index.findMany({
          where: {
            promotion_id: promotion_id,
            promotion_type: 'discount',
          },
          select: {
            product_option_id: true,
            url_image: true,
            product_name: true,
            option_name: true,
            unit: true,
            online_price: true,
            sale_price: true,
            sale_percent: true,
            mat_identity: true,
          },
          orderBy: {
            sale_percent: 'desc'
          }
        });

        if(!discountPromotion){
          set.status = 404;
          return { message: "No valid discount promotion found" };
        }

        return {
          ...promotionDetail,
          products: discountPromotion
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching discount promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find Discount By Promotion ID",
        description: `
          This endpoint retrieves discount promotion by its promotion ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/promotions/bundle-deal/get-x-free-y/:promotion_id",
    async ({ params, set }) => {
      try {
        const promotion_id = params.promotion_id;

        const promotionDetail = await prisma.public_promotion.findFirst({
          where: {
            id: promotion_id,
            is_active: true,
          },
          select: {
            url_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            is_accept_overlapse_promotion: true,
          }
        });

        if(!promotionDetail){
          set.status = 404;
          return { message: "No valid bundle deal get x free ypromotion found" };
        }

        const bundleDealPromotion = await prisma.vw_promotion_bundle_deal_index.findMany({
          where: {
            promotion_id: promotion_id,
          },
          select: {
            url_product_image: true,
            get_product_option_id: true,
            get_product_name: true,
            get_quantity: true,
            get_product_unit: true,
            free_url_image: true,
            free_product_option_id: true,
            free_product_name: true,
            free_product_price: true,
            free_quantity: true,
            free_product_unit: true,
          }
        });
        
        if(!bundleDealPromotion){
          set.status = 404;
          return { message: "No valid bundle deal promotion found" };
        }

        return {
          ...promotionDetail,
          products: bundleDealPromotion
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching bundle deal promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find Bundle Deal By Promotion ID",
        description: `
          This endpoint retrieves bundle deal promotion by its promotion ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/promotions/bundle-deal/grand-total/:promotion_id",
    async ({ params, set }) => {
      try {
        const promotion_id = params.promotion_id;

        const promotionDetail = await prisma.public_promotion.findFirst({
          where: {
            id: promotion_id,
            is_active: true,
          },
          select: {
            url_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            is_accept_overlapse_promotion: true,
          }
        });

        if(!promotionDetail){
          set.status = 404;
          return { message: "No valid bundle deal grand total promotion found" };
        }

        const bundleDealGrandTotalPromotion = await prisma.vw_promotion_grandtotal_bill_index.findMany({
          where: {
            promotion_id: promotion_id,
          },
          select: {
            level_no: true,
            url_promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            minimum_grand_total: true,
            url_image: true,
            product_name: true,
            option_name: true,
            online_price: true,
            free_quantity: true,
          }
        });
        
        if(!bundleDealGrandTotalPromotion){
          set.status = 404;
          return { message: "No valid bundle deal grand total promotion found" };
        }

        return {
          ...promotionDetail,
          products: bundleDealGrandTotalPromotion
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching grand total for bundle deal promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find Bundle Deal Grand Total By Promotion ID",
        description: `
          This endpoint retrieves bundle deal grand total promotion by its promotion ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/promotions/extra-points/products/:promotion_id",
    async ({ params, set }) => {
      try {
        const promotion_id = params.promotion_id;

        const promotionDetail = await prisma.public_promotion.findFirst({
          where: {
            id: promotion_id,
            is_active: true,
          },
          select: {
            url_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            is_accept_overlapse_promotion: true,
          }
        });

        if(!promotionDetail){
          set.status = 404;
          return { message: "No valid extra points products promotion found" };
        }

        const extrapointsProducts = await prisma.vw_promotion_extra_points_products_index.findMany({
          where: {
            promotion_id: promotion_id,
          },
          select: {
            url_image: true,
            mat_identity: true,
            product_option_id: true,
            product_name: true,
            option_name: true,
            points_multiplier: true,
          }
        });
        
        if(!extrapointsProducts){
          set.status = 404;
          return { message: "No valid extra points products promotion found" };
        }

        return {
          ...promotionDetail,
          products: extrapointsProducts
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching extra points products promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find Extra Points Products By PromotionID",
        description: `
          This endpoint retrieves extra points products promotion by its promotion ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/promotions/extra-points/grand-total/:promotion_id",
    async ({ params, set }) => {
      try {
        const promotion_id = params.promotion_id;

        const promotionDetail = await prisma.vw_promotion_extra_points_bill_index.findMany({
          where: {
            promotion_id: promotion_id,
          },
          select: {
            url_promotion_image: true,
            promotion_name: true,
            promotion_description: true,
            promotion_start: true,
            promotion_end: true,
            is_accept_overlapse_promotion: true,
            level_no: true,
            min_amount: true,
            points_multiplier: true,
          },
          orderBy: {
            level_no: 'asc'
          }
        });
        
        return promotionDetail
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        set.status = 500;
        console.error("Error fetching extra points products promotion:", error);
        return { message: errorMessage };
      }
    },
    {
      params: t.Object({
        promotion_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Promotions - Find Extra Points Products By PromotionID",
        description: `
          This endpoint retrieves extra points products promotion by its promotion ID.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/events",
    async ({headers, set}) => {
      try {
        const response = await prisma.public_events.findMany({
          where : {
            is_active: true
          },
          select: {
            id: true,
            event_pic: true,
            eventname: true,
            event_detail: true,
            event_registerdate: true,
            event_preregister: true,
            eventStartDate: true,
            eventEndDate: true,
            location: true,
            tierregister: true,
            tierpreregister: true,
            link: true,
            is_active: true,
          },
          orderBy: {
            eventname: "asc",
          },
        })
        
        if(!response){
          set.status = 404;
          return {message : "Not have any events are active"}
        }

        return mapPublicEvents(response);
      } catch (error) {
        set.status = 500;
        return {message: error};
      }
    },
    {
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Events - Find all events are active",
        description: `
          This endpoint retrieves events are active in 3nconnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/campaign-voucher",
    async({ headers, set }) => {
      try { 
        const response = await prisma.gift_voucher.findMany({
          where: {
            gift_voucher_type: 'event',
            campaign_start: {
              lte: now
            },
            campaign_end: {
              gte: now
            }
          }
        })

        if(!response){
          set.status = 404;
          return { message: "Failed to read Campaign Voucher." }
        }

        return response;
      } catch (error) {
        set.status =500;
        return { message: error };
      }
    },
    {
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Campaign Voucher - Find All",
        description: `
          This endpoint retrieves campaign voucher in 3nconnect.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
  .get(
    "/campaign-voucher/:gift_voucher_id",
    async({ headers, set, params}) => {
      try{
        const gift_voucher_id = params.gift_voucher_id

        const resGiftVoucher = await prisma.gift_voucher.findFirst({
          where : {
            id : gift_voucher_id,
            gift_voucher_type: 'event',
            is_active: true,
          },
          select: {
            url_image: true,
            voucher_name: true,
            voucher_description: true,
            voucher_conditions: true,
            campaign_start: true,
            campaign_end: true,
            customer_tiers: true,
            is_accept_overlapse_promotion: true,
          }
        })

        if(!resGiftVoucher){
          set.status = 404;
          return { message: "Failed to read master campaign voucher detail." }
        }

        const resCampaignVoucher = await prisma.gift_voucher_campaign_voucher.findMany({
          where: {
            gift_voucher_id : gift_voucher_id
          },
          select: {
            generic_voucher_id: true
          }
        })

        if(!resCampaignVoucher){
          set.status = 404;
          return { message: "Failed to read campaign gift voucher" }
        }

        const generic_voucher_ids = resCampaignVoucher.map((index)=> index.generic_voucher_id);

        const response = await prisma.gift_voucher.findMany({
          where: {
            id: {
              in: generic_voucher_ids as Array<number>
            }
          },
          select: {
            voucher_uuid: true,
            url_image: true,
            voucher_name: true,
            voucher_description: true,
            voucher_conditions: true,
            is_accept_overlapse_promotion: true,
            is_limit_voucher: true,
            gift_voucher_method: true,
            limited_total_quantity: true,
            gift_voucher_generic: {
              select: {
                discount_type: true,
                min_purchase: true,
                percent_discount: true,
                max_discount: true,
              }
            }
          }
        })

        return response;

      } catch (error) {
        set.status = 500;
        return { message: error }
      }
    },
    {
      params: t.Object({
        gift_voucher_id: t.Number(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Campaign Voucher - View detail campaign by gift_voucher_id",
        description: `
          This endpoint retrieves detail of campaign voucher.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["Publics"],
      },
    },
  )
