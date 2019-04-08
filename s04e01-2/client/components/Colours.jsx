import React from 'react'

// function Colours (props) {
//   const coloursList = props.colours.map(name =>
//     <li key={name}
//       className={name}
//       // style={{ backgroundColor: name }}
//     >{name}</li>
//   )

//   return (
//     <React.Fragment>
//       <h2>This is the Colours component</h2>
//       <ul>{coloursList}</ul>
//     </React.Fragment>
//   )
// }

class Colours extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const coloursList = this.props.colours.map(name =>
      <li key={name}
        className={name}
      // style={{ backgroundColor: name }}
      >{name}</li>
    )

    return (
      <React.Fragment>
        <h2>This is the Colours component</h2>
        <ul>{coloursList}</ul>
      </React.Fragment>
    )
  }
}

export default Colours
