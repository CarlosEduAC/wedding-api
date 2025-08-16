FROM public.ecr.aws/docker/library/node:24.5.0-alpine3.19 AS build-stage

WORKDIR /usr/src/app

COPY package*.json .
COPY prisma ./prisma/

RUN npm i

COPY . .

RUN npm run build
COPY ./swagger.json ./dist/swagger.json

RUN apk update \
  && apk upgrade \
  && wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem \
  && mv global-bundle.pem /etc/ssl/


ARG app_version
ENV APP_VERSION=$app_version

ARG app_name
ENV APP_NAME=$app_name

ARG aws_region
ENV AWS_REGION=$aws_region

ARG node_env
ENV NODE_ENV=$node_env

CMD [ "node" ,"./dist/src/server.js" ]
