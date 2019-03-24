const game = require('../game') // this is the line to add

test('test setup working', () => {
  expect(true).toBe(true)
})

test('scores a gutterball frame', () => {
  // Arrange
  const frame = [0, 0]
  const expected = 0

  // Act
  const actual = game.scoreFrame(frame)

  // Assert
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  // Arrange
  const frame = [2, 3]
  const expected = 5

  // Act
  const actual = game.scoreFrame(frame)

  // Assert
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  // Arrange
  const frame = [4, 6]
  const nextFrame = [3, 0]
  const expected = 13

  // Act
  const actual = game.scoreFrame(frame, nextFrame)

  // Assert
  expect(actual).toBe(expected)
})
