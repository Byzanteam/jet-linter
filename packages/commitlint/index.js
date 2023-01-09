module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'bugfix', 'fix', 'refactor', 'style', 'docs', 'chore', 'other'],
    ],
    'type-empty': [2, 'never'],
    'type-case': [0],
    'scope-empty': [2, 'always'],
    'subject-full-stop': [0],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 72],
  },
}
