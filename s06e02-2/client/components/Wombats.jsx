import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import Wombat from './Wombat'

function Wombats (props) {
  const { wombats } = props

  return (
    <div>
      <Header size='huge'>Wombats</Header>
      <ul>
        {wombats.map(wombat =>
          <Wombat key={wombat}
            wombat={wombat} />)}
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    wombats: state.wombats
  }
}

const getConnector = connect(mapStateToProps)
export default getConnector(Wombats)

// export default connect(mapStateToProps)(Wombats)
