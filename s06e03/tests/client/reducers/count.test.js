import count from '../../../client/reducers/count'

test('count reducer ADD_WOMBAT', () => {
  const state = 1
  const addAction = {
    type: 'ADD_WOMBAT'
  }
  const expected = 2
  const actual = count(state, addAction)
  expect(actual).toEqual(expected)
})

test('count reducer DELETE_WOMBAT', () => {
  const state = 3
  const deleteAction = {
    type: 'DELETE_WOMBAT'
  }
  const expected = 2
  const actual = count(state, deleteAction)
  expect(actual).toEqual(expected)
})
