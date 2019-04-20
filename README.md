# hmrb-official

> Hamamatsu.rb website

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## Build on Docker

run container

```
$ docker-compose build
$ docker-compose up -d 
$ docker-compose exec vue_app sh
```

start dev-server

```
/ # cd /app
/app # yarn run dev
```

http://0.0.0.0:8080