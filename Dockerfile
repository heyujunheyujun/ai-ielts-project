# ============================================
# Stage 1: Build Client (Vue3 + Vite)
# ============================================
FROM node:24-alpine AS client-build
WORKDIR /app/client

# 复制依赖文件并安装
COPY client/package.json ./
RUN npm install --no-audit --no-fund && npm cache clean --force

# 复制源码并构建
COPY client/ ./
RUN npx vite build

# ============================================
# Stage 2: Build Server (TypeScript)
# ============================================
FROM node:24-alpine AS server-build
WORKDIR /app/server

# 复制依赖文件并安装
COPY server/package.json ./
RUN npm install

# 复制源码并构建
COPY server/ ./
RUN npm run build

# ============================================
# Stage 3: Production Runtime
# ============================================
FROM node:24-alpine

WORKDIR /app

# 安装生产依赖
COPY server/package.json ./
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

# 复制构建产物
COPY --from=server-build /app/server/dist ./server/dist
COPY --from=client-build /app/client/dist ./client/dist

EXPOSE 5000

ENV NODE_ENV=production
ENV PORT=5000

CMD ["node", "server/dist/index.js"]
