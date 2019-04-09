import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Colours from './Colours'
import Colour from './Colour'

const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/colours" render={() =>
        <Colours colours={colours} />}
      />
      <Route path="/colour/:colour" component={Colour} />
    </React.Fragment>
  )
}

export default App
