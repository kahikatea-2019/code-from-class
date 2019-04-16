import React from 'react'
import {getGeekJokes} from '../api/geekjokes'

export default class GeekJokes extends React.Component {
  state = {
    geekJokes: ''
  }

  componentDidMount() {
    getGeekJokes()
    .then(joke => {
      this.setState({
        geekJokes: joke
      })
    })
    .catch(err => {
      console.error('Error:', err)
    })
  }

  render() {
    return (
      <div>
        <hr/>
        <h3>Joke of the day</h3>
        <p>{this.state.geekJokes}</p>
      </div>
    )
  }
}
