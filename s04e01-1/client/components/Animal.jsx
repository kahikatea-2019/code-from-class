import React from 'react'

function Animal (props) {
  console.log(props)
  return (
    <React.Fragment>
      <div>Your favourite animal is a {props.name}.</div>
      {props.name === 'dog' ? <img src="http://www.placepuppy.net/400/250" /> : null}
    </React.Fragment>
  )
}

export default Animal
