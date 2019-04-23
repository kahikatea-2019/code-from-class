import {
  ADD_WOMBAT,
  DELETE_WOMBAT,
  UPDATE_WOMBAT } from '../actions/wombat'

const initialWombatState = [
  'Gertrude',
  'Bartholemew',
  'Florence'
]

const wombatReducer = (wombats = initialWombatState, action) => {
  switch (action.type) {
    case ADD_WOMBAT:
      return [
        ...wombats,
        action.wombat
      ]

    case DELETE_WOMBAT:
      return wombats.filter(wombat =>
        wombat !== action.wombat
      )

    case UPDATE_WOMBAT:
      return wombats.map(wombat =>
        wombat === action.wombat
          ? action.change
          : wombat
      )

    default:
      return wombats
  }
}

export default wombatReducer
