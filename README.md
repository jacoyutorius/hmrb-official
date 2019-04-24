# hmrb-official

> Hamamatsu.rb website

## Develop on Docker

### build & run container

```
$ docker-compose build
$ docker-compose up -d 
```

### start dev-server

```
$ docker-compose exec vue_app yarn start
```

or 

containerに入って、

```
$ docker-compose exec vue_app sh
```

直接起動

```
/app # yarn start
```

http://0.0.0.0:8080