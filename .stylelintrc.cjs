module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-order-config-standard'
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    indentation: 2
  }
}
