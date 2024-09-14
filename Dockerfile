FROM node:22.7
LABEL maintainer="Nyaomaru<nyaonyao0725@gmail.com>"

COPY package.json pnpm-lock.yaml /app/

WORKDIR /app

RUN corepack enable

RUN pnpm install --frozen-lockfile

COPY . .
