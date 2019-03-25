const fs = require('fs')

module.exports = {
  readFileContents,
  testableReadFileContents
}

function readFileContents (filePath, callback) {
  fs.readFile(filePath, 'utf-8', callback)
}

function testableReadFileContents (filePath, fileAccessor, callback) {
  fileAccessor(filePath, 'utf-8', callback)
}
