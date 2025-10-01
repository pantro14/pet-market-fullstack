#!/bin/sh
# Exit immediately if a command exits with a non-zero status.
set -e
echo "Starting backend build..."
PRISMA_SCHEMA_PATH="./apps/pet-market-be/prisma/schema.prisma"
npm install
npx prisma generate --schema=$PRISMA_SCHEMA_PATH
npx prisma migrate deploy --schema=$PRISMA_SCHEMA_PATH
npx nx build pet-market-be --prod
echo "✅ backend built successfully."
