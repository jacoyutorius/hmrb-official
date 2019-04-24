FROM node:10.15-alpine

WORKDIR /app

COPY . .

RUN : "apk update" && apk update

RUN : "install yarn" && npm install -g yarn

RUN : "install vue-cli" && yarn add vue-cli
   
RUN : "yarn install" && yarn install

EXPOSE 8080

CMD ["/bin/sh"]
