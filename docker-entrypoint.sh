#!/bin/sh
set -eu

if [ -z "${DIRECT_URL:-}" ]; then
  echo "DIRECT_URL is required for prisma db pull" >&2
  exit 1
fi

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is required for application runtime" >&2
  exit 1
fi

echo ${DATABASE_URL}

echo "Refreshing Prisma schema from database..."
bunx prisma db pull

echo "Generating Prisma client from refreshed schema..."
bunx prisma generate

exec bun run src/index.ts
