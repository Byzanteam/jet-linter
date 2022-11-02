module.exports = {
  root: true,
  plugins: ['prettier', 'json'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
  rules: {
    'eol-last': ['error', 'always'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error'],
  },
}
