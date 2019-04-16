import React, { Component } from 'react'
import { getCharacterDetails } from '../api/gameOfThrones'

export default class GameOfThrones extends Component {
    state = {
        name: ''
    }

    componentDidMount () {
        getCharacterDetails()
            .then(character => {
                this.setState({
                    name: character.name
                })
            })
    }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <hr />
      </>
    )
  }
}
