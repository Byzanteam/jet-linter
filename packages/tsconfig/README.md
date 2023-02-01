## Usage

**Install**:

```bash
$ pnpm add @byzanteam/tsconfig -D
```

**Edit `tsconfig.json`**:

_use base config_

```jsonc
{
  "extends": "@byzanteam/tsconfig"
}
```

or

```jsonc
{
  "extends": "@byzanteam/tsconfig/tsconfig.base.json"
}
```

_use vue config_

```jsonc
{
  "extends": "@byzanteam/tsconfig/vue"
}
```

or

```jsonc
{
  "extends": "@byzanteam/tsconfig/tsconfig.vue.json"
}
```
