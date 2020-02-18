# base image
FROM node:12.2.0-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install @vue/cli@3.7.0 -g
RUN npm install

CMD ["npm", "run", "serve"]