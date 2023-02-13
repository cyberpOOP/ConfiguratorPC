FROM node:18

WORKDIR /app

COPY package*.json /app

COPY . .

RUN npm run install:frontend

EXPOSE 3000

CMD npm run start:frontend