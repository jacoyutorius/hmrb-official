# hamamatsu-rb-official

Vue.js + Bulma

[http://hmrb-official.s3-website-ap-northeast-1.amazonaws.com/](http://hmrb-official.s3-website-ap-northeast-1.amazonaws.com/)

## Build Setup

``` bash
# git clone 
git clone git@github.com:jacoyutorius/hmrb-official.git
cd git@github.com:jacoyutorius/hmrb-official.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Doorkeeper API

アクセストークンが必要になるとあったが、2016/12/17現在まだ必須になっていない模様.
(https://www.doorkeeper.jp/news/2016/3/1/update-to-api)

```bash
curl -i -H "<ACCESS_TOKEN>" https://api.doorkeeper.jp/groups/hmrb/events\?since\=20160601
```

## S3_Website

AmazonS3にてホスティングしている.
設定もろもろは[s3_website](https://github.com/laurilehmijoki/s3_website)を使用.
もし自分のAWS環境でホスティングする場合には以下のように.

s3_website.yml

```
s3_id: AWS_ACCESS_KEY
s3_secret: AWS_ACCESS_SECRET
s3_bucket: YOUR_BACKET_NAME
```

```bash
s3_website cfg apply
s3_website push
```