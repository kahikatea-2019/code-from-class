import {
  addWombat,
  deleteWombat,
  ADD_WOMBAT,
  DELETE_WOMBAT } from '../../client/actions/wombat'

test('addWombat creates a correct action', () => {
  const name = 'test wombat'
  const action = addWombat(name)
  expect(action.type).toBe(ADD_WOMBAT)
  expect(action.wombat).toBe(name)
})

test('deleteWombat creates a correct action', () => {
  const name = 'test wombat'
  const action = deleteWombat(name)
  expect(action.type).toBe(DELETE_WOMBAT)
  expect(action.wombat).toBe(name)
})
