FROM public.ecr.aws/docker/library/node:24.6-alpine3.22 AS build-stage

WORKDIR /usr/src/app

RUN apk update \
  && apk upgrade \
  && apk add --no-cache openssl libssl-dev \
  && rm -rf /var/cache/apk/*

COPY package*.json .
COPY prisma ./prisma/

RUN npm i

COPY . .

RUN npm run build
COPY ./swagger.json ./dist/swagger.json

RUN npx prisma generate

CMD [ "node" ,"./dist/src/server.js" ]
