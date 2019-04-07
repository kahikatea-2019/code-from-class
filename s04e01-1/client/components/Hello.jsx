import React from 'react'

import Animal from './Animal'

function Hello (props) {
  console.log(props)

  return (
    <React.Fragment>
      <h2>Hello {props.name}!</h2>
      <Animal name={props.animal} />
    </React.Fragment>
  )
}

export default Hello
