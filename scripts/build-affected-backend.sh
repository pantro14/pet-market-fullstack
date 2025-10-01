#!/bin/sh
# Exit immediately if a command exits with a non-zero status.
set -e

echo "Checking for changes affecting the 'backend' project..."

# Check if the 'backend' app is in the list of affected build targets
if npx nx affected --target=build | grep -q 'pet-market-be'; then
  echo "✅ Changes detected for 'backend'. Starting build..."
  npm install
  PRISMA_SCHEMA_PATH="./apps/pet-market-be/prisma/schema.prisma"
  npx prisma generate --schema=$PRISMA_SCHEMA_PATH
  npx prisma migrate deploy --schema=$PRISMA_SCHEMA_PATH
  npx nx build pet-market-be --prod
else
  echo "🛑 No changes detected for 'backend'. Skipping build."
  exit 0
fi