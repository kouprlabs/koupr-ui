import fs from 'fs'
import path from 'path'
import { rimrafSync } from 'rimraf'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function cleanup(keepPathsArray: string[]) {
  const distDir = path.join(__dirname, '..', 'dist')
  let rootItems: string[] = []
  try {
    rootItems = fs.readdirSync(distDir)
  } catch (err) {
    console.error(err.message)
    return
  }
  rootItems.forEach((item) => {
    const itemPath = path.join(distDir, item)
    if (!keepPathsArray.includes(item)) {
      try {
        rimrafSync(itemPath, { preserveRoot: false })
      } catch (err) {
        console.error(err.message)
      }
    }
  })
}

function copyFonts() {
  const filesDir = path.join(__dirname, '..', 'dist', 'files')
  fs.mkdirSync(filesDir)
  fs.cpSync(
    path.join(
      __dirname,
      '..',
      'node_modules',
      '@fontsource',
      'ibm-plex-sans',
      'files',
    ),
    filesDir,
    { recursive: true },
  )
  fs.cpSync(
    path.join(
      __dirname,
      '..',
      'node_modules',
      '@fontsource-variable',
      'material-symbols-rounded',
      'files',
    ),
    filesDir,
    { recursive: true },
  )
  fs.cpSync(
    path.join(
      __dirname,
      '..',
      'node_modules',
      '@fontsource-variable',
      'unbounded',
      'files',
    ),
    filesDir,
    { recursive: true },
  )
}

cleanup([
  'main.js',
  'main.js.map',
  'main.css',
  'module.js',
  'module.js.map',
  'module.css',
  'types.d.ts',
])
copyFonts()
