import React from 'react'
import {getXkcd} from '../api/xkcd'

 export default class Xkcd extends React.Component {
  state = {
    xkcd: {
      title: '',
      subtitile: '',
      comic: '',
    }
  }

  componentDidMount(){
    getXkcd()
    .then(res => {
      this.setState({
        xkcd: {
          title: res.safe_title,
          subtitle: res.alt,
          comic: res.img
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
          <hr/>
          <h3>{this.state.xkcd.title}</h3>
          <h6>{this.state.xkcd.subtitle}</h6>
          <br />
          <img src= {this.state.xkcd.comic}/>
        </React.Fragment>
      )}
    }
