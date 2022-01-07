module.exports = {
  printWidth: 120, // 每行代码最大长度
  tabWidth: 2, //一个tab代表几个空格数
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: true, // 声明后带分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed',
  bracketSpacing: true, // 对象&数组是否追加空格
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  jsxBracketSameLine: false, // 启用jsx语法，> 放在末尾
  jsxSingleQuote: false, // 使用单引号
  arrowParens: 'always', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict', //html空格严格程度，可选<css|strict|ignore>
  endOfLine: 'auto',
  rangeStart: 0,
};
