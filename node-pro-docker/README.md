# 通用登录入口

## 项目启动

### 1. 安装docker

https://docs.docker.com/get-docker/

### 2. 拉image

```
docker pull <username>/<imagename>:latest
```

### 3. 启动

首次启动, 执行下面命令, 创建container

```
docker run -ti --name gateway -p 3003:8080 --mount type=bind,source="$PWD",target=/usr/src <username>/<imagename> /bin/sh
```

非首次启动, 直接启动container

```
docker start -i gateway 
```

启动服务 npm run start

```
/usr/src # npm run start

> login-gateway@1.0.0 start /usr/src
> node app/main.js

start
服务已启动
监听端口 8080

```

### 其他

查看当前是否有已创建的container

```
$ docker ps -a               
CONTAINER ID        IMAGE                                          COMMAND                  CREATED             STATUS                        PORTS                    NAMES
e592a1f95000        <username>/<imagename>   "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes                  0.0.0.0:3003->8080/tcp   gateway
```

如果有则可以直接启动该container

```
docker start -i <name|id> 
```


