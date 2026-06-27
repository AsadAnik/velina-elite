# Build Stage
FROM node:26-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@11.5.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm prisma generate
RUN pnpm build

# Production Stage
FROM node:26-alpine
WORKDIR /app
RUN npm install -g pnpm@11.5.0
ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY prisma.config.ts ./

EXPOSE 3000
CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/src/main"]