export const ADD_WOMBAT = 'ADD_WOMBAT'
export const DELETE_WOMBAT = 'DELETE_WOMBAT'

export function deleteWombat (wombat) {
  return {
    type: DELETE_WOMBAT,
    wombat
  }
}

export function addWombat (wombat) {
  return {
    type: ADD_WOMBAT,
    wombat
  }
}
