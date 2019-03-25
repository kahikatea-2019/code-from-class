const index = require('./index')

test('readFileContents returns the contents of a file', () => {
  // arrange
  const filePath = 'testdata.txt'

  // act
  index.readFileContents(filePath, (err, contents) => {
    // assert
    expect(err).toBeNull()
    expect(contents).toMatch('the contents')
  })
})

test('testableReadFileContents returns the contents of a file', () => {
  // arrange
  const filePath = 'testdata.txt'
  const fakeReadFile = (filePath, options, callback) => {
    callback(null, 'the contents')
  }

  // act
  index.testableReadFileContents(filePath, fakeReadFile, (err, contents) => {
    // assert
    expect(err).toBeNull()
    expect(contents).toMatch('the contents')
  })
})
