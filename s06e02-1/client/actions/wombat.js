export function addWombat (wombat) {
  return {
    type: 'ADD_WOMBAT',
    wombat
  }
}

export function deleteWombat (wombat) {
  return {
    type: 'DELETE_WOMBAT',
    wombat
  }
}

export function updateWombat (wombat, change) {
  return {
    type: 'UPDATE_WOMBAT',
    wombat,
    change
  }
}
