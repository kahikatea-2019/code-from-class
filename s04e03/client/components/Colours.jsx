import React from 'react'
import { Link } from 'react-router-dom'

const Colours = (props) => {
  return (
    <React.Fragment>
      <h1>Colours</h1>
      <ul>
        {props.colours.map(colour => {
          return (
            <li key={colour}>
              <Link to={`/colour/${colour}`}>
                <span style={{ color: colour }}>{colour}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default Colours
