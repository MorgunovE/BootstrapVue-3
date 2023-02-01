module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true,
    'vue/setup-compiler-macros':true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
}
