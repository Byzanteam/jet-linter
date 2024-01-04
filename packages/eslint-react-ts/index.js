module.exports = {
  extends: ['@byzanteam/eslint-config-ts', 'plugin:react/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
