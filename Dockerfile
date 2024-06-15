FROM node:20.12.0-bookworm
LABEL maintainer="Nyaomaru<nyaonyao0725@gmail.com>"

COPY package.json yarn.lock /app/

WORKDIR /app

COPY .yarn ./.yarn

RUN corepack enable
RUN yarn set version stable

COPY . /app
