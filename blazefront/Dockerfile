FROM node:latest as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@18

COPY . .
RUN npm ci

CMD ["ng", "serve", "--host", "0.0.0.0"]
