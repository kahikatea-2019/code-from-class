import React from 'react'

import Animal from './Animal'
import Colours from './Colours'

function App (props) {
  const primaryColours = [
    'red',
    'green',
    'blue'
  ]

  return (
    <React.Fragment>
      <h1>React App</h1>
      {/* {props.showAnimal && <Animal />} */}
      {props.showAnimal
        ? <Animal animal="dog" />
        : <Colours colours={primaryColours} />}
      {/* {
        new Colours({ colours: primaryColours })
      } */}
    </React.Fragment>
  )
}

export default App
