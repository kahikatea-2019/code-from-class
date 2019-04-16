import React from 'react'
import {getHoroscopes} from '../api/horoscopes'

export default class Horoscopes extends React.Component {
  state = {
    horoscope: {
      sign: this.props.sign,
      date: '',
      description: ''
    }
  }

  componentDidMount() {
    const sign = this.props.sign
    
    getHoroscopes(sign)
    .then(res => {
      this.setState({
        horoscope: {
          date: res.date_range,
          description: res.description
        }
      })
    })
    .catch(err => {
      console.error('Error:', err)
    })
  }

  render() {
    return (
      <React.Fragment>
        <h6>{this.props.sign} - ({this.state.horoscope.date})</h6> 
        <p>{this.state.horoscope.description}</p>
      </React.Fragment>
    )
  }
}
