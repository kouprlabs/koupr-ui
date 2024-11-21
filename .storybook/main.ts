// Copyright (c) 2023 Anass Bouassaba.
//
// This software is licensed under the MIT License.
// You can find a copy of the license in the LICENSE file
// included in the root of this repository or at
// https://opensource.org/licenses/MIT.
import type { StorybookConfig } from '@storybook/react-vite'
import autoprefixer from 'autoprefixer'
import path from 'path'
import tailwindcss from 'tailwindcss'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': ['@storybook/addon-essentials'],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  async viteFinal(config) {
    const newConfig = mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            tailwindcss({ config: './tailwind.storybook.config.ts' }),
            autoprefixer(),
          ],
        },
      },
      build: {
        rollupOptions: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onwarn(warning: any, warn: any) {
            // Suppress: Module level directives cause errors when bundled, "use client"
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
              return
            }
            warn(warning)
          },
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
