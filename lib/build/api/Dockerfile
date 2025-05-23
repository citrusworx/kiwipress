FROM node:alpine3.20

WORKDIR /api

RUN apk add yarn nodejs bash --no-cache

COPY api/package*.json ./
COPY api/yarn.lock ./

COPY api ./

RUN yarn install

CMD ["yarn", "dev"]