FROM oven/bun:alpine AS base

RUN apk add --no-cache openssl nodejs npm

WORKDIR /app

RUN npm i -g npx

# install
FROM base AS install
COPY package.json .
COPY bun.lockb .
COPY . .
RUN bun install
RUN bun run build

# prepare to run
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", ".output/server/index.mjs"]