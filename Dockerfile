FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration=production

EXPOSE 4200

CMD ["npx", "ng", "serve"]