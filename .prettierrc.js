module.exports = {
  // 指定 JSON Schema 的 URL，用于验证此配置文件的格式和字段
  // 这里使用的是官方的 Prettier 配置 Schema
  $schema: 'https://json.schemastore.org/prettierrc',
  // 是否在语句末尾添加分号
  semi: true,
  // 在 JSX 中是否使用单引号
  jsxSingleQuote: true,
  // 是否在所有情况下使用单引号
  singleQuote: true,
  // 每行代码的最大宽度，超过此宽度的代码会自动换行
  printWidth: 120,
  // 每个缩进级别的空格数
  tabWidth: 2,
  // 是否在对象的最后一个属性后添加逗号
  trailingComma: 'all',
  // 是否将 HTML/JSX 的闭合标签放在同一行
  bracketSameLine: true,
  // 箭头函数的参数是否总是用括号包裹
  arrowParens: 'always',
  // 是否强制每个属性单独一行
  singleAttributePerLine: true,
};
