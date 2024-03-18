/** @type {import("prettier").Config} */
module.exports = {
  // 分享配置里插件的路径需要为绝对路径 https://github.com/prettier/prettier/issues/15667
  // vscode 的插件无法解析 import.meta.resolve 用 require.resolve 代替
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')],
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  arrowParens: 'avoid',
  endOfLine: 'lf',
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
  ],
}
