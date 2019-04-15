import React from 'react'

import print from '../printHelper'

export default class Home extends React.Component {
  constructor (props) {
    print('Home', 'constructor')
    super(props)
    this.state = { text: '' }
  }

  componentDidMount () {
    print('Home', 'componentDidMount')
    this.setState({ text: 'Component has mounted' })
  }

  componentDidUpdate () {
    print('Home', 'componentDidUpdate')
  }

  render () {
    print('Home', 'render')
    return (
      <React.Fragment>
        <h1>Home component</h1>
        <p>{this.state.text}</p>
      </React.Fragment>
    )
  }
}
