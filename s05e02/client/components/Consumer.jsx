import React from 'react'
import request from 'superagent'

class Consumer extends React.Component {
  state = {
    message: ''
  }

  componentDidMount () {
    request.post('http://localhost:3000')
      .send({
        greeting: 'Hello world and universe!'
      })
      .then(res => {
        this.setState({
          message: res.body.message
        })
      })
      .catch(err => {
        this.setState({
          message: err.message
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <div>The server said:</div>
        <div>{this.state.message}</div>
      </React.Fragment>
    )
  }
}

export default Consumer
