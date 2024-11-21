FROM node:22-alpine3.20
# Esta distribución de linux viene con una carpeta interna llamada app

# cd app -> En este punto no existe nada instalado, solo la versión de linux y nos movimos a app
WORKDIR /app

# Tenemos que copiar los archivos de nuestra aplicación en esa carpeta
# Los primeros archivos, son los archivos que vamos a copiar
# y el último archivo es el destino, es decir, donde van a ir.
# IMPORTANTE: Como en la instrucción de arriba ya estamos en la carpeta 'app' por eso podemos usar el './' para
# indicarle que queremos guardarlo en la carpeta en la que estamos, es decir, en 'app'
COPY package.json ./

# Ya tenemos los archivos dentro de la carpeta. Ahora, necesitamos instalar los paquetes de node
# Este sería el equivalente a escribir 'npm install' en la terminal
RUN npm install

COPY app.js ./

# Ya que tenemos los node_modules, ahora podemos correr el proyecto con el comando para correr el contenedor
# Este comando NO se ejecuta en el build, se ejecuta CUANDO SE MONTE EL CONTENEDOR
CMD ["node", "app.js"]
