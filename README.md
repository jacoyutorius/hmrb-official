# hamamatsu-rb-official

Vue.js + Bulma

## Build Setup

``` bash
# git clone 
git clone this-repo
cd this-repo

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Doorkeeper API

アクセストークンが必要.
(https://www.doorkeeper.jp/news/2016/3/1/update-to-api)

```bash
curl -i -H "<ACCESS_TOKEN>" https://api.doorkeeper.jp/groups/hmrb/events\?since\=20160601
```