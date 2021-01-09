FROM node:14.11.0-alpine3.11

RUN apk --no-cache add curl
RUN apk add lsof
RUN apk add git
RUN apk add zsh
RUN sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
RUN apk add vim

WORKDIR /usr/src

STOPSIGNAL SIGTERM


# RUN tnpm install


