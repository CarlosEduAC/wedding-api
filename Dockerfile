FROM public.ecr.aws/docker/library/node:24.6-alpine3.22 AS builder

WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache openssl

COPY package*.json .
COPY prisma ./prisma/

RUN npm i && npx prisma generate

COPY . .

RUN npm run build

FROM public.ecr.aws/docker/library/node:24.6-alpine3.22 AS runner

WORKDIR /app
COPY ./swagger.json ./dist/swagger.json

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "node" ,"./dist/src/server.js" ]
