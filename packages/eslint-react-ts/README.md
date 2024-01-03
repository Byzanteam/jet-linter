## Usage

**Install**:

```bash
$ pnpm add @byzanteam/eslint-config-react-ts @rushstack/eslint-patch -D
```

**Edit `.eslintrc`**:

```js
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@byzanteam/eslint-config-react-ts'],
}
```
