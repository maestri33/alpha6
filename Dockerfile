# Dockerfile - Produção
FROM node:20-alpine

WORKDIR /app

# Copiar dependências primeiro (cache)
COPY package*.json ./
RUN npm ci --only=production

# Copiar código
COPY . .

# Criar usuário não-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000

CMD ["node", "src/index.js"]
