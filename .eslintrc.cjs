module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json',
      'tsconfig.node.json'
    ]
  },
  plugins: [
    'vue'
  ],
  rules: {
  },
  ignorePatterns: [
    '!.stylelintrc.cjs'
  ]
}
