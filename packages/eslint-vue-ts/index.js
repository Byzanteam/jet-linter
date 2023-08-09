module.exports = {
  extends: [
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
    '@byzanteam/eslint-config-ts',
    'plugin:vue/vue3-essential',
  ],
  env: { 'vue/setup-compiler-macros': true },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/no-unused-properties': 'error',
    'vue/require-name-property': 'error',
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/no-required-prop-with-default': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/no-setup-props-destructure': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
}
