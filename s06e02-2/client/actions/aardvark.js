export const ADD_AARDVARK = 'ADD_AARDVARK'
export const DELETE_AARDVARK = 'DELETE_AARDVARK'
export const UPDATE_AARDVARK = 'UPDATE_AARDVARK'

export function addAardvark (aardvark) {
  return {
    type: ADD_AARDVARK,
    aardvark
  }
}

export function deleteAardvark (aardvark) {
  return {
    type: DELETE_AARDVARK,
    aardvark
  }
}

export function updateAardvark (aardvark, change) {
  return {
    type: UPDATE_AARDVARK,
    aardvark,
    change
  }
}
