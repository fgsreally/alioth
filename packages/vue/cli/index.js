const fs = require('fs')
const path = require('path')
const [dir] = process.argv.slice(2, 1)

const allFiles = fs.readdirSync(path.resolve(__dirname, 'template'))

allFiles.forEach((file) => {
  fs.copyFile(path.resolve(__dirname, 'template', file), path.resolve(process.cwd(), dir, file))
})
