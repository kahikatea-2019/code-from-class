import React from 'react'

function Colour (props) {
  return (
    <li>
      <span style={{ color: props.name }}>{props.name}</span>
      {' '}<button onClick={props.deleteHandler}>x</button>
    </li>
  )
}

export default Colour
