const initialWombatState = {
  wombats: [
    'Gertrude',
    'Bartholemew',
    'Florence'
  ]
}

const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        wombats: [
          ...state.wombats,
          action.wombat
        ]
      }

    case 'DELETE_WOMBAT':
      return {
        wombats: state.wombats.filter(wombat =>
          wombat !== action.wombat
        )
      }

    case 'UPDATE_WOMBAT':
      return {
        wombats: state.wombats.map(wombat =>
          wombat === action.wombat
            ? action.change
            : wombat
        )
      }

    default:
      return state
  }
}

export default wombatReducer
