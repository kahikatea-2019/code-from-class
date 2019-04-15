import React from 'react'

import Home from './Home'
import Consumer from './Consumer'

import print from '../printHelper'

class App extends React.Component {
  constructor (props) {
    print('App', 'constructor')
    super(props)
    this.state = { text: '' }
  }

  componentDidMount () {
    print('App', 'componentDidMount')
    this.setState({ text: 'Component has mounted' })
  }

  componentDidUpdate () {
    print('App', 'componentDidUpdate')
  }

  render () {
    print('App', 'render')
    return (
      <React.Fragment>
        <Home />
        <Consumer />
      </React.Fragment>
    )
  }
}

export default App
