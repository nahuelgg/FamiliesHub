# ============================================
# BUILD STAGE - Compilar frontend
# ============================================
FROM node:20-alpine AS build

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiar código fuente
COPY . .

# Compilar frontend
RUN npm run build

# ============================================
# PRODUCTION STAGE
# ============================================
FROM node:20-alpine

WORKDIR /app

# Copiar package.json y node_modules (solo producción)
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copiar build del frontend
COPY --from=build /app/dist ./dist

# Copiar servidor backend
COPY server ./server

# Exponer puertos
EXPOSE 3001

# Script de inicio: sirve frontend build y backend
CMD ["node", "server/index.js"]
