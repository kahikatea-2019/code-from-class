import React from 'react'
import GeekJokes from './GeekJokes'
import News from './News'
import Xkcd from './Xkcd'
import Horoscope from './Horoscope'
import Weather from './Weather'
import Finance from './Finance'
import StarWars from './StarWars'
import GameOfThrones from './GameOfThrones'

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
let yyyy = today.getFullYear()

let date = dd + '/' + mm + '/' + yyyy

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <center>
              <div className='col l12'>
                <h1 className='title'>Throne Times</h1>
              </div>
            </center>
          </div>
          <div className='row'>
            <hr />
            <strong>Issue 9,001</strong> - {date}
            <hr />
          </div>
          <div className='row'>
            <div className='col l8'>
              <div className='row'>
                <div className='col s6'>
                  <News />
                </div>
                <div className='col s6'>
                  <Finance />
                </div>
              </div>
              <div className='row'>
                <div className='col l12'>
                  <Xkcd />
                </div>
              </div>
            </div>
            <div className='col l4'>
            <div className='col s12'>
                <GameOfThrones />
              </div>
              <div className='col s12'>
                <StarWars />
              </div>
              <div className='col s12'>
                <Weather />
              </div>
              <div className='col s12'>
                <GeekJokes />
              </div>
              <div className='col s12'>
                <Horoscope />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
