FROM node:19-alpine3.15 as dev
WORKDIR /app
COPY package.json ./
RUN yarn install
CMD ["yarn", "start:dev"]
# Si nosotros hicieramos esto, normalmente docker ejecuta todo lo anterior
# y al no encontrar nada después el contenedor se detendría. Pero en este caso estamos poniendo el
# 'command' en el docker compose


FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile


FROM node:19-alpine3.15 as prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]









