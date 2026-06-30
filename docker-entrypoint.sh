#!/bin/sh
set -eu

mask_url() {
  printf '%s' "$1" | sed 's#^\([^:]*://\)[^@]*@#\1***@#'
}

if [ -z "${DIRECT_URL:-}" ]; then
  echo "DIRECT_URL is required for prisma db pull" >&2
  exit 1
fi

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is required for application runtime" >&2
  exit 1
fi

echo "Runtime environment detected:"
echo "  DIRECT_URL=$(mask_url "$DIRECT_URL")"
echo "  DATABASE_URL=$(mask_url "$DATABASE_URL")"

echo "Refreshing Prisma schema from database..."
bunx prisma db pull

echo "Checking introspected Prisma schema for required models..."
required_models="product_categories promotions products"
for model_name in $required_models; do
  if grep -q "^model ${model_name} {" prisma/schema.prisma; then
    echo "  Found model: ${model_name}"
  else
    echo "  Missing model after db pull: ${model_name}" >&2
  fi
done

echo "Generating Prisma client from refreshed schema..."
bunx prisma generate

echo "Prisma schema preview:"
grep -E '^model (product_categories|promotions|products) ' prisma/schema.prisma || true

exec bun run src/index.ts
