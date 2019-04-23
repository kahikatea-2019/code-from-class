import {
  ADD_AARDVARK,
  DELETE_AARDVARK,
  UPDATE_AARDVARK } from '../actions/aardvark'

const initialAardvarkState = [
  'Gert',
  'Bart',
  'Flo'
]

const aardvarkReducer = (aardvarks = initialAardvarkState, action) => {
  switch (action.type) {
    case ADD_AARDVARK:
      return [
        ...aardvarks,
        action.aardvark
      ]

    case DELETE_AARDVARK:
      return aardvarks.filter(aardvark =>
        aardvark !== action.aardvark
      )

    case UPDATE_AARDVARK:
      return aardvarks.map(aardvark =>
        aardvark === action.aardvark
          ? action.change
          : aardvark
      )

    default:
      return aardvarks
  }
}

export default aardvarkReducer
