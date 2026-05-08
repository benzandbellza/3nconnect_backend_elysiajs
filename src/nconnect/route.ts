import { Elysia, t } from "elysia";
import { prisma } from './prisma_connection'
import { auth } from "../plugins/auth";
import "dotenv/config";

const now: Date = new Date();
const utc7: Date = new Date(now.getTime() + 7 * 60 * 60 * 1000);

export const nconnectRoute = new Elysia({
    prefix: "/api/3nconnect",
})
    .use(auth())
    .get(
    "/brands",
    async ({ headers }) => {
      try {
        const response = await prisma.brands.findMany();

        if (!response) {
          throw new Error("No valid roles found");
        }
        return response;
      } catch (error) {
        console.error("Error fetching valid roles:", error);
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
      detail: {
        servers: [{ url: process.env.APP_API_PREFIX || "" }],
        summary: "Roles Management - Find All",
        description: `
          This endpoint retrieves all valid roles in the IBB System.
        `.trim(),
        security: [{ bearerAuth: [] }],
        tags: ["IBB System v3"],
        // you can also add `deprecated`, `security`, etc.
      },
    },
  )
