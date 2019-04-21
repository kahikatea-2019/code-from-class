import React from 'react'

import Wombats from './Wombats'

function App (props) {
  const { wombats, dispatch } = props

  return (
    <Wombats wombats={wombats} dispatch={dispatch} />
  )
}

export default App
