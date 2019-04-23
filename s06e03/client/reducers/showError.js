const initialState = false

function showError (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ERROR':
      return true
    default:
      return state
  }
}

export default showError
