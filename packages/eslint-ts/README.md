## Usage

**Install**:

```bash
$ pnpm add @byzanteam/eslint-config-ts @rushstack/eslint-patch -D
```

**Edit `.eslintrc.cjs`**:

```js
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@byzanteam/eslint-config-ts'],
}
```

## Note
* `eslint: ^8.44.x`
* `prettier: ^2.8.x`
* `typescript: ^5.0.x`
