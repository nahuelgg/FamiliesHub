#!/bin/bash
# ============================================
# Deploy Script - Families Hub
# ============================================
# Uso: bash deploy.sh
# ============================================

set -e

echo "========================================"
echo "  🚀 Desplegando Families Hub..."
echo "========================================"

# Variables
REPO_URL="https://github.com/nahuelgg/FamiliesHub.git"
APP_DIR="$HOME/families-hub"

# 1. Clonar o actualizar el repositorio
if [ -d "$APP_DIR" ]; then
  echo "📂 Actualizando repositorio existente..."
  cd "$APP_DIR"
  git pull origin main
else
  echo "📂 Clonando repositorio..."
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

# 2. Buildear y levantar contenedor
echo "🐳 Buildando y levantando contenedor Docker..."
docker compose up -d --build

echo "========================================"
echo "  ✅ ¡Despliegue completado!"
echo "  🌐 App corriendo en puerto 3001"
echo "========================================"
echo ""
echo "📌 Configuración de Nginx necesaria:"
echo "   Agregá esto a tu nginx:"
echo ""
echo "   server {"
echo "       listen 80;"
echo "       server_name families.lat www.families.lat;"
echo ""
echo "       location / {"
echo "           proxy_pass http://127.0.0.1:3001;"
echo "           proxy_http_version 1.1;"
echo "           proxy_set_header Upgrade \$http_upgrade;"
echo "           proxy_set_header Connection 'upgrade';"
echo "           proxy_set_header Host \$host;"
echo "           proxy_cache_bypass \$http_upgrade;"
echo "           proxy_set_header X-Real-IP \$remote_addr;"
echo "           proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;"
echo "           proxy_set_header X-Forwarded-Proto \$scheme;"
echo "       }"
echo "   }"
