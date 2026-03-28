FROM node:20-alpine

# Install build tools for better-sqlite3
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY server.js ./
COPY public/ ./public/

VOLUME ["/data"]
EXPOSE 3000

ENV NODE_ENV=production
ENV DB_PATH=/data/tracker.db

CMD ["node", "server.js"]
