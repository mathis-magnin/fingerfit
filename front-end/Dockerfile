FROM node:20.14 as build

WORKDIR /app

COPY ./ /app

COPY package.json ./
RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/front-end /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

