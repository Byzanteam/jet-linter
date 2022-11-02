module.exports = {
  plugins: ['workspace-scopes'],
  extends: ['@byzanteam/commitlint-config'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'root', // use to handle root repo changes
        'deps-dev', // for dependabot's commit
        'deps', // for dependabot's commit
      ],
    ],
    'scope-empty': [2, 'never'],
  },
}
