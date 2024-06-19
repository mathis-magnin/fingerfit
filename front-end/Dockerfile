FROM node:alpine3.20 as build

WORKDIR /app

COPY ./ /app

COPY package.json ./
RUN npm install

RUN npm run build

FROM nginx:1.24

COPY --from=build /app/dist/front-end /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

