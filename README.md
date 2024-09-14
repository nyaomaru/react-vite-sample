# react-vite-sample

Sandbox for below libraries with React & Vite

- `react-hook-form`
- `react-redux`
- `@tanstack/react-query`
- `@tanstack/react-router`
- `@mui/material`
- `@vanilla-extract/css`
- `@storybook/test-runner`
- `Biome`
- `@apollo/client`
- `pnpm`

## 🚀 Get started

### 🐋 Docker

If you can use docker, easy way to start.

```sh
docker compose up -d
```

Then, you can access to `http://localhost:5173/`.

### 😺 Pnpm

This project needs swagger api.

Firstly, you clone below repository and run below command.

```sh
git clone https://github.com/nyaomaru/react-vite-swagger
pnpm start
```

After run API server, you run below command.

```sh
pnpm dev
```

You need to login, But the ID & Password is OK anything (minimum 3 characters)

### GraphQL Sample

If you try to use GraphQL sample page that is `book`, you should run `graphql_sample` server.

```sh
git clone https://github.com/nyaomaru/graphql-sample
pnpm && pnpm start
```
