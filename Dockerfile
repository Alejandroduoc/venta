# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto 3000
EXPOSE 3001

CMD [ "node", "dist/index.js" ]
