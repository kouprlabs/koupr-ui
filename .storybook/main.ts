import type { StorybookConfig } from '@storybook/react-vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { mergeConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr()],
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
    })
  },
}
export default config
