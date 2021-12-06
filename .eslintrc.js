module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'max-len': ['error', { code: 100 }],
    'no-useless-constructor': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    'prefer-const': ['off'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['error']
  }
}
