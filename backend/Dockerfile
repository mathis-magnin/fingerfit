FROM node:20.14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 9428

CMD ["npm", "run", "start","dev"]