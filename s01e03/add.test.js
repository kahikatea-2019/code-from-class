const add = require('./add').add

test('adds 1 + 2 equals 3', () => {
  // Arrange
  const a = 1
  const b = 2
  const expected = 3

  // Act
  const actual = add(a, b)

  // Assert
  expect(actual).toBe(expected)
})

test('adds 3 + -4 equals -1', () => {
  // Arrange
  const a = 3
  const b = -4
  const expected = -1

  // Act
  const actual = add(a, b)

  // Assert
  expect(actual).toBe(expected)
})
