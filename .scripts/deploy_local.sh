#!/bin/bash
set -e

echo "=============================="
echo "🚀 Deployment Started..."
echo "=============================="

# Debug: Check if Node.js and npm are available
echo "🔍 Checking Node.js and npm availability..."
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed or not in PATH."
  exit 1
fi
echo "✅ Node.js version: $(node -v)"

if ! command -v npm &> /dev/null; then
  echo "❌ npm is not installed or not in PATH."
  exit 1
fi
echo "✅ npm version: $(npm -v)"

# Navigate to the project directory
echo "📂 Navigating to project directory..."
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
