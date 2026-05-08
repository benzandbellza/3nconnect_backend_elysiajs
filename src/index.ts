import { Elysia } from "elysia";
import { ecommerceRoute } from "./ecommerce/route";
import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";


const app = new Elysia()
  .use(
    openapi({
      documentation: {
        info: {
          title: "3NConnect with ElysiaJS",
          version: "1.0.0",
          description: "3NConnect APIs built with ElysiaJS framework",
        },
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
      },
    }),
  )
  .use(cors())
  .use(ecommerceRoute)
  .get("/", async (e) => {
    return { message: "Welcome to 3NConnect ElysiaJS API" };
  })
  .listen(process.env.APP_PORT || 3000, () => {
    console.log(
      `Server is running at http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`,
    );
  });