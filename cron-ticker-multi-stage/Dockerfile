# Esta será nuestra primera etapa
FROM node:19.2-alpine3.16 AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Segunda etapa
FROM node:19.2-alpine3.16 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test


# Tarea: Terminar las etapas faltantes
# Solución profesor:
# Dependencias de producción
FROM node:19.2-alpine3.16 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

FROM node:19.2-alpine3.16 AS runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node", "app.js"]

# Tercera etapa -> Mi solución
#FROM node:19.2-alpine3.16 AS runner
#WORKDIR /app
#COPY --from=builder /app/ ./
#RUN rm -rf tests && rm -rf node_modules
#RUN npm install --prod
#CMD ["node", "app.js"]

