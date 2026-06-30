# --- Stage 1: Build Stage ---
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies (leverages Docker layer cache)
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source and Prisma schemas
COPY . .

# Generate Prisma client during build so local/dev images remain runnable.
# The container will refresh schema and regenerate again at startup using
# runtime environment variables from --env-file.
RUN bunx prisma generate

# --- Stage 2: Runner Stage (Production) ---
FROM oven/bun:1-alpine AS runner
WORKDIR /app
RUN apk add --no-cache ca-certificates openssl

ENV NODE_ENV=production

# Copy only what is needed to run
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x ./docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
