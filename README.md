# Recommend lint config of Jet

## Install & Usage

### eslint-vue

> Install

```sh
pnpm add @byzanteam/eslint-config-vue -D
```

> Usage

```js
// .eslintrc.js
module.exports = {
  extends: ['@byzanteam/eslint-config-vue']
}
```

### eslint-vue-ts

> Install
```sh
pnpm add @byzanteam/eslint-config-vue-ts -D
```

> Usage
```js
// .eslintrc.js
module.exports = {
  extends: ['@byzanteam/eslint-config-vue-ts']
}
```

### prettier

> Install
```sh
pnpm add @byzanteam/prettier-config -D
```

> Usage

see also https://prettier.io/docs/en/configuration.html#sharing-configurations

### tsconfig

> Install
```sh
pnpm add @vue/tsconfig @byzanteam/tsconfig -D
```

> Usage

tsconfig.json
```json
{
  "extends": "@byzanteam/tsconfig/index.json"
}
```