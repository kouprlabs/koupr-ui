import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import ts from 'typescript-eslint'

export default [
  ...ts.configs.recommended,
  eslintPluginPrettierRecommended,
  ...storybook.configs['flat/recommended'],
  {
    files: ['src/**/*.{ts,tsx}'],
  },
  {
    plugins: {
      react,
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: [
      '*.cjs',
      'dist',
      '.parcel-cache',
      'tailwind.config.js',
      'postcss.config.js',
      'replace-exports.js',
    ],
  },
]
