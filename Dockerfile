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
# Use 127.0.0.1 (not "localhost", which may resolve to IPv6 ::1) and honour the
# runtime PORT env so the check matches whatever port the server actually binds.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT:-4000}/api/version" || exit 1

ENV NODE_ENV=production
ENV DB_PATH=/data/tracker.db

CMD ["node", "server.js"]
