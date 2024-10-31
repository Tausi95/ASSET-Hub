#!/bin/bash

# Base directory for the backend
BASE_DIR="backend"

# Array of directories to create
declare -a DIRS=(
  "$BASE_DIR/config"
  "$BASE_DIR/controllers"
  "$BASE_DIR/models"
  "$BASE_DIR/routes"
  "$BASE_DIR/middleware"
)

# Array of files to create with their respective paths
declare -a FILES=(
  "$BASE_DIR/config/db.js"
  "$BASE_DIR/controllers/userController.js"
  "$BASE_DIR/models/userModel.js"
  "$BASE_DIR/routes/userRoutes.js"
  "$BASE_DIR/middleware/authMiddleware.js"
  "$BASE_DIR/.env"
  "$BASE_DIR/server.js"
  "$BASE_DIR/package.json"
)

# Create directories
for dir in "${DIRS[@]}"; do
  mkdir -p "$dir"
  echo "Created directory: $dir"
done

# Create files
for file in "${FILES[@]}"; do
  touch "$file"
  echo "Created file: $file"
done

echo "All specified directories and files have been created successfully."
