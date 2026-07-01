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
# Health check must use 127.0.0.1, NOT "localhost": in Alpine, localhost also
# resolves to IPv6 ::1 and BusyBox wget tries ::1 first, but the Node server
# listens on IPv4 (0.0.0.0) only — so "localhost" gives "Connection refused".
# ${PORT:-4000} keeps it aligned with whatever port the server actually binds.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT:-4000}/api/version" || exit 1

ENV NODE_ENV=production
ENV DB_PATH=/data/tracker.db

CMD ["node", "server.js"]
