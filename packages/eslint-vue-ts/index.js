module.exports = {
  extends: [
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    '@byzanteam/eslint-config-ts',
    'plugin:vue/vue3-essential',
  ],
  env: { 'vue/setup-compiler-macros': true },
  rules: {
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
    'vue/padding-line-between-blocks': ['error', 'always'],
  },
}
