import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      semi: ['error', 'never'],
      'quotes': ['error', 'single'],
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      pluginVue,
    },
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
    }
  },
  {
    ignores: [
      '.storybook/**/*',
      'CHANGELOG.md',
      'coverage/',
      'dist/**',
      'node_modules/**/*',
      'playground/**/*',
      'public',
      'README.md',
      'storybook-static/**/*',
      '.nuxt/'
    ],
  },
]