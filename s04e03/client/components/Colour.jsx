import React from 'react'

const Colour = (props) => {
  const colour = props.match.params.colour

  return (
    <React.Fragment>
      <h1 style={{ color: colour }}>{colour}</h1>
    </React.Fragment>
  )
}

export default Colour
