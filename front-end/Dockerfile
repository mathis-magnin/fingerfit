FROM node:alpine3.20 as build

WORKDIR /app

COPY ./ /app

ARG SERVER_URL
RUN sed -i "s|serverUrl: '.*'|serverUrl: '${SERVER_URL}'|g" src/environments/environment.prod.ts

COPY package.json ./
RUN npm install

RUN npm run build

FROM nginx:alpine3.19

COPY --from=build /app/dist/front-end /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

