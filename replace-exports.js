const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'dist', 'types.d.ts')

fs.readFile(filePath, 'utf8', (err, data) => {
  if (!err) {
    const result = data.replace(/export const/g, 'declare const')
    fs.writeFileSync(filePath, result, 'utf8')
  }
})
