export function deleteWombat (wombat) {
  return {
    type: 'DELETE_WOMBAT',
    wombat
  }
}

export function addWombat (wombat) {
  return {
    type: 'ADD_WOMBAT',
    wombat
  }
}
