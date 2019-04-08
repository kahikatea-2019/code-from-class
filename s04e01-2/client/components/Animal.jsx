import React from 'react'

// function Animal (props) {
//   return (
//     <React.Fragment>
//       <h2>This is the Animal component</h2>
//       <div>Dogs are really really great:</div>
//       <img src="http://www.placepuppy.net/400/250" />
//     </React.Fragment>
//   )
// }

class Animal extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>This is the Animal component</h2>
        <div>{this.props.animal} are really really great:</div>
        <img src="http://www.placepuppy.net/400/250" />
      </React.Fragment>
    )
  }
}

export default Animal
