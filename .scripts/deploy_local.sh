#!/bin/bash
set -e

echo "=============================="
echo "🚀 Deployment Started..."
echo "=============================="

# Navigate to the project directory
cd /home/debian/BeTainos-directory-frontend

# Pull the latest changes from the main branch
echo "📥 Pulling latest changes from Git..."
git pull origin main
echo "✅ New changes pulled successfully."

# Install dependencies
echo "📦 Installing dependencies..."
npm install --yes
echo "✅ Dependencies installed."

# Build the project
echo "🔨 Building the project..."
npm run build
echo "✅ Build completed."

# Restart the application (e.g., with PM2 or another process manager)
echo "🔄 Restarting the application..."
pm2 restart all  # Replace with your specific command if not using PM2
echo "✅ Application restarted successfully."

echo "=============================="
echo "🎉 Deployment Finished!"
echo "=============================="
