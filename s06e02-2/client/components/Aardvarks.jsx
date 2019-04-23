import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import Aardvark from './Aardvark'

function Aardvarks (props) {
  const { aardvarks } = props

  return (
    <div>
      <Header size='huge'>Aardvarks</Header>
      <ul>
        {aardvarks.map(aardvark => (
          <Aardvark key={aardvark} aardvark={aardvark} />
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    aardvarks: state.aardvarks
  }
}

export default connect(mapStateToProps)(Aardvarks)
