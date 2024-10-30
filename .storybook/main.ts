import type { StorybookConfig } from '@storybook/react-vite'
import autoprefixer from 'autoprefixer'
import path from 'path'
import tailwindcss from 'tailwindcss'
import { mergeConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': ['@storybook/addon-essentials'],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  async viteFinal(config) {
    const newConfig = mergeConfig(config, {
      plugins: [svgr()],
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
    })
    newConfig.resolve.alias['@koupr/ui'] = path.resolve(
      __dirname,
      '../dist/module.js',
    )
    return newConfig
  },
}
export default config
