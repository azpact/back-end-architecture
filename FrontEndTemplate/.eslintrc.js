module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ['vue', 'standard', 'plugin:vue/recommended'],
  plugins: [
    'vue',
    "standard",
    "promise"
  ],
  'rules': {
    "indent": ["error", 4, { "SwitchCase": 1 }],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "no-param-reassign": "warn",
    "no-spaced-func": "error",
    "no-use-before-define": "error",
    "no-unused-vars": "error",
    "no-with": "error",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}