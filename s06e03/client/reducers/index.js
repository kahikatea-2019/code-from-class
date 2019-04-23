import { combineReducers } from 'redux'

import isLoading from './isLoading'
import wombats from './wombats'
import count from './count'
import showError from './showError'

export default combineReducers({
  isLoading,
  wombats,
  count,
  showError
})
