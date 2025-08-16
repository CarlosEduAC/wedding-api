FROM public.ecr.aws/docker/library/node:24.6-alpine3.22 AS build-stage

WORKDIR /app

RUN apk update && apk upgrade

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build
COPY ./swagger.json ./dist/swagger.json

CMD [ "node" ,"./dist/src/server.js" ]
