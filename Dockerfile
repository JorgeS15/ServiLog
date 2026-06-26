FROM node:20-alpine

# Install build tools for better-sqlite3
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY server.js ./
COPY public/ ./public/

VOLUME ["/data"]
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:4000/api/version || exit 1

ENV NODE_ENV=production
ENV DB_PATH=/data/tracker.db

CMD ["node", "server.js"]
