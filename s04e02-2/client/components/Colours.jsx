import React from 'react'

import Colour from './Colour'

class Colours extends React.Component {
  state = {
    colours: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  }

  deleteColour = (colourToDelete) => {
    // This function returns a function!!
    return () => {
      this.setState({
        colours: this.state.colours.filter(colour => colour !== colourToDelete)
      })
    }
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.colours.map(colour =>
            <Colour key={colour}
              name={colour}
              deleteHandler={this.deleteColour(colour)} />
          )}
        </ul>
      </div>
    )
  }
}

export default Colours
