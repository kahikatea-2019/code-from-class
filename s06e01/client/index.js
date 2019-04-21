import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './components/App'
import wombatReducer from './reducers/wombat'

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  const { wombats } = store.getState()
  const { dispatch } = store

  ReactDOM.render(
    <App wombats={wombats} dispatch={dispatch} />,
    document.getElementById('app')
  )
}
