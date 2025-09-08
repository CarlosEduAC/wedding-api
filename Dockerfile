FROM public.ecr.aws/docker/library/node:24.6-alpine3.22 AS builder

WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache openssl libc6-compat

COPY package*.json .
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

RUN npm i

COPY . .

RUN npm run build

FROM public.ecr.aws/docker/library/node:24.6-alpine3.22 AS runner

WORKDIR /app

RUN apk add --no-cache openssl libc6-compat

COPY ./swagger.json ./dist/swagger.json

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /usr/local/bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["docker-entrypoint.sh"]
CMD [ "node" ,"./dist/src/server.js" ]
