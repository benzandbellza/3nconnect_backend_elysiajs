import { Elysia, t } from "elysia";
import jwt from "@elysiajs/jwt";
import { bearer } from "@elysiajs/bearer";

export const auth = () => (app: Elysia) => {
  app
    .use(bearer())
    .use(
      jwt({
        name: "jwt",
        secret: process.env.APP_JWT_SECRET_TOKEN as string,
        alg: process.env.APP_JWT_ALGO as string || "HS256",
        exp : "1d",
      })
    )
    .onBeforeHandle(async ({ bearer, jwt, set }) => {
      if (!bearer) {
        set.status = 401;
        return "Unauthorized: No token provided.";
      }
      
      const user = await jwt.verify(bearer);

      if (!user) {
        set.status = 401;
        return "Unauthorized: Invalid token.";
      }
    });

  return app;
};