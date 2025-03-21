// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        'order': [ 'script[setup]', 'template', 'style' ]
      }],
      'vue/script-indent': ['error', 2, {
        baseIndent: 1,
        switchCase: 1
      }],
      'vue/multi-word-component-names': 'off',
      'no-undef': 'off',
      'vue/no-multiple-template-root': 'off',
    }
  },
)
