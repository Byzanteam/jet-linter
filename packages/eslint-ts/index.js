module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? [
            'error',
            {
              allow: ['warn', 'error'],
            },
          ]
        : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'import/named': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['*'],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['expression'],
        next: ['*'],
      },
      {
        blankLine: 'any',
        prev: ['expression'],
        next: ['expression'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: [
          'block',
          'if',
          'function',
          'multiline-const',
          'multiline-let',
          'multiline-var',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'if',
          'block',
          'function',
          'multiline-const',
          'multiline-let',
          'multiline-var',
        ],
        next: ['*'],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
}
