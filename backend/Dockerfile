FROM node:alpine3.20

WORKDIR /app


RUN apk --no-cache add curl

COPY package.json package-lock.json ./
RUN npm install

COPY . /app

EXPOSE 9428

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"e2e\" ]; then npm run start:e2e; else npm run start; fi"]