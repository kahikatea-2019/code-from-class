const fs = require('fs')
const path = require('path')

function readColors () {
  const filePath = path.join(__dirname, 'colors.json')

  fs.readFile(filePath, 'utf8', (err, contents) => {
    if (err) {
      console.error(err)
    } else {
      const colors = JSON.parse(contents)
      console.log(contents)
      console.log(colors)
    }
  })
}

function writeNames () {
  const filePath = path.join(__dirname, 'names.json')
  const data = [ 'Martha', 'Harold', 'Becky' ]

  fs.writeFile(filePath, JSON.stringify(data), (err, contents) => {
    if (err) {
      console.error(err)
    } else {
      console.log('The file has been written.')
    }
  })
}

function stringifyDemo () {
  const data = {
    name: 'Jill',
    age: 42,
    location: 'Auckland'
  }
  console.log(data)
  console.log(JSON.stringify(data))
}

// readColors()
// writeNames()
stringifyDemo()
