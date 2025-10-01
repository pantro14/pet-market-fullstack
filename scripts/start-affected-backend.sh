#!/bin/sh
# Exit immediately if a command exits with a non-zero status.
set -e

echo "Checking for changes affecting the 'backend' project..."

# Check if the 'backend' app is in the list of affected build targets
if npx nx affected --target=build | grep -q 'pet-market-be'; then
  echo "✅ Changes detected for 'backend'. Starting server..."
  node apps/pet-market-be/dist/main.js
else
  echo "🛑 No changes detected for 'backend'. Skipping starting server."
  exit 0
fi