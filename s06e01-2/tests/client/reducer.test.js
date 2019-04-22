import reducer from '../../client/reducers/wombat'
import { ADD_WOMBAT, DELETE_WOMBAT } from '../../client/actions/wombat'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect(Array.isArray(newState.wombats)).toBeTruthy()
})

test('reducer handles ADD_WOMBAT correctly', () => {
  // Arrange
  const newWombat = 'test3'
  const currentState = {
    wombats: ['test1', 'test2']
  }
  const action = {
    type: ADD_WOMBAT,
    wombat: newWombat
  }

  // Act
  const newState = reducer(currentState, action)

  // Assert
  expect(newState.wombats.length).toBe(3)
  expect(newState.wombats[2]).toBe(newWombat)
  expect(newState.wombats).toContain(newWombat)
  expect(newState).not.toBe(currentState) // really good to check
})

test('reducer handles DELETE_WOMBAT correctly', () => {
  const deletedWombat = 'test2'
  const currentState = {
    wombats: ['test1', deletedWombat, 'test3']
  }
  const action = {
    type: DELETE_WOMBAT,
    wombat: deletedWombat
  }
  const newState = reducer(currentState, action)
  expect(newState.wombats.length).toBe(2)
  expect(newState.wombats).not.toContain(deletedWombat)
  expect(newState).not.toBe(currentState) // really good to check
})

test('reducer returns current state when action does not match', () => {
  const currentState = {
    wombats: ['test1', 'test2']
  }
  const action = {
    type: 'UNKNOWN_ACTION'
  }
  const newState = reducer(currentState, action)
  expect(newState).toBe(currentState) // toBe uses ===
})
