import { ADD_WOMBAT, DELETE_WOMBAT } from '../actions/wombat'

const initialWombatState = {
  wombats: [
    'Gertrude',
    'Bartholemew'
  ]
}

const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case ADD_WOMBAT:
      return {
        wombats: [
          ...state.wombats,
          action.wombat
        ]
      }

    case DELETE_WOMBAT:
      return {
        wombats: state.wombats.filter(wombat =>
          wombat !== action.wombat
        )
      }

    default:
      return state
  }
}

export default wombatReducer
