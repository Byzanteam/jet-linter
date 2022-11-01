module.exports = {
  extends: [
    '@byzanteam/eslint-config-vue',
    "@vue/eslint-config-typescript"
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue', '.ts'],
      },
    },
  },
}
