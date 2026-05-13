# --- Stage 1: Build Stage ---
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies (leverages Docker layer cache)
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source and Prisma schemas
COPY . .

# Generate Prisma clients for all schemas (Linux-compatible binaries)
RUN bunx prisma db pull
RUN bunx prisma generate

# --- Stage 2: Runner Stage (Production) ---
FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what is needed to run
COPY --from=builder /app ./.env
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

WORKDIR /app/src

CMD ["bun", "run", "index.ts"]
