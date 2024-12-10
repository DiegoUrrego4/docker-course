<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Clonar proyecto
2. `yarn install`
3. Clonar el archivo `.env.template` y renombrarlo a `.env`
4. Cambiar las variables de entorno
5. Levantar la base de datos

```
docker-compose up -d
```

6. Levantar: `yarn start:dev`

7. Ejecutar SEED

```
http://localhost:3000/api/seed
```

# Production notes:

Ejecutar este comando

```
docker compose -f docker-compose.prod.yml build
```

```
# Autenticación Digital Ocean

docker logout registry.digitalocean.com
docker login registry.digitalocean.com

# Borrar el builder
docker buildx rm mybuilder

# Crearlo de nuevo
docker buildx create --name mybuilder --driver docker-container --bootstrap

# Usen el nuevo builder
docker buildx use mybuilder

# Build y Push
docker buildx build \
--platform linux/amd64,linux/arm64 \
-t registry.digitalocean.com/<Nuestro registro>/teslo-shop:[TAG] --push .
```
