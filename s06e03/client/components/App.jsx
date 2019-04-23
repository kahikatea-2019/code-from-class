import React from 'react'
import { connect } from 'react-redux'

import Wombats from './Wombats'

function App (props) {
  return (
    <React.Fragment>
      <Wombats />
      <br />
      Total count: {props.wombatCount}
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    wombatCount: state.count
  }
}

export default connect(mapStateToProps)(App)
