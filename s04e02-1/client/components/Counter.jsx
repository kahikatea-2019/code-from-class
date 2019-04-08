import React from 'react'

class Counter extends React.Component {
  // constructor () {
  //   super()

  //   this.state = {
  //     count: 0,
  //     name: 'Don'
  //   }
  //   // If we don't use ES6 function syntax, we
  //   // must bind the `this` object to the function:
  //   // https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb
  //   this.increase = this.increase.bind(this)
  // }

  state = {
    count: 0,
    message: 'Blah'
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
      name: 'Hey, this is cool!'
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  applyCount = event => {
    this.setState({
      count: Number(event.target.value)
    })
  }

  render () {
    return (
      <React.Fragment>
        <h2>Counter:</h2>
        <div>{this.state.count}</div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <br />
        <label htmlFor="newCount">Set count: </label>
        <input name="newCount"
          type="number"
          onChange={this.applyCount}
          onFocus={() => console.log(`Don't touch me!`)} />
      </React.Fragment>
    )
  }
}

export default Counter
