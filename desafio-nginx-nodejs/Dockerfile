FROM node:20.16.0-alpine as app

WORKDIR /app

COPY ./node .

RUN cp .env.example .env

RUN npm install

CMD [ "npm", "run", "start" ]

# ============================================================================

FROM nginx:stable-alpine as web

COPY ./nginx/nginx.conf.template /etc/nginx/templates/default.conf.template

# ============================================================================

FROM mysql:latest as db

COPY ./node/src/database/schema.sql /docker-entrypoint-initdb.d
