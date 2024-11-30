import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import { createFilter } from '@rollup/pluginutils'
import { createRequire } from 'module'
import path from 'path'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const injectCssImportPlugin = () => {
  return {
    name: 'inject-css-import',
    generateBundle(options, bundle) {
      const filter = createFilter('**/*.js')
      for (const file of Object.keys(bundle)) {
        if (filter(file)) {
          const code = bundle[file].code
          // Determine the CSS file name by replacing .js with .css in each JS file name
          const cssFileName = path.basename(file).replace('.js', '.css')
          // Modify the bundle to include the CSS import statement
          bundle[file].code = `import './${cssFileName}';\n${code}`
        }
      }
    },
  }
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [
      '@chakra-ui/react',
      '@chakra-ui/theme-tools',
      'chakra-react-select',
      '@emotion/css',
      '@emotion/react',
      '@emotion/styled',
      'classnames',
      'framer-motion',
      'react',
      'react-dom',
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.rollup.json',
      }),
      svg(),
      postcss({
        extract: true,
      }),
      injectCssImportPlugin(),
      strip(),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/types.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
