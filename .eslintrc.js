module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
}
