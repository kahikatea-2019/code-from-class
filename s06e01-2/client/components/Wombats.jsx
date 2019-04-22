import React from 'react'

import Wombat from './Wombat'

function Wombats (props) {
  const { wombats, dispatch } = props

  return (
    <React.Fragment>
      <h1>Wombats</h1>
      <ul>
        {wombats.map(wombat => // Have you seen this before?
          <Wombat key={wombat} wombat={wombat}
            dispatch={dispatch} />)}
      </ul>
    </React.Fragment>
  )
}

export default Wombats
