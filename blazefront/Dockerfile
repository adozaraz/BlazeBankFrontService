FROM node:6.10.2-alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

RUN npm install -g @angular/cli

RUN npm  ci

COPY . /app

CMD ["ng", "serve", "--host", "0.0.0.0"]
