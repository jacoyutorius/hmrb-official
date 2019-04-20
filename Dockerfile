FROM node:10.15-alpine

WORKDIR .
RUN apk update && \
    npm install -g yarn \
    yarn install vue-cli \
    yarn install

EXPOSE 8080

CMD ["/bin/sh"]
