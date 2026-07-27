# ============================================
# Stage 1: Build Client (Vue3 + Vite)
# ============================================
FROM node:24-alpine AS client-build
WORKDIR /app/client
COPY client/package.json ./
RUN npm install
COPY client/ ./
RUN npx vite build

# ============================================
# Stage 2: Build Server (TypeScript)
# ============================================
FROM node:24-alpine AS server-build
WORKDIR /app/server
COPY server/package.json ./
RUN npm install
COPY server/ ./
RUN npm run build

# ============================================
# Stage 3: Production Runtime
# ============================================
FROM node:24-alpine

WORKDIR /app

# Copy server production deps
COPY server/package.json ./
RUN npm install --omit=dev

# Copy compiled server (includes all routes, data, seed)
COPY --from=server-build /app/server/dist ./dist

# Copy client dist
COPY --from=client-build /app/client/dist ./client/dist

EXPOSE 5000

ENV NODE_ENV=production
ENV PORT=5000

CMD ["node", "dist/index.js"]
