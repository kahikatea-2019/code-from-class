import React from 'react'
import { connect } from 'react-redux'

import { saveWombat } from '../actions'

class AddWombat extends React.Component {
  state = {
    wombat: ''
  }

  handleChange = (e) => {
    this.setState({
      wombat: e.target.value
    })
  }

  handleSave = () => {
    this.props.dispatch(saveWombat(this.state.wombat))
    this.setState({
      wombat: ''
    })
  }

  render () {
    return (
      <React.Fragment>
        <input name="wombat" onChange={this.handleChange} value={this.state.wombat} />
        <button onClick={this.handleSave}>Save</button>
      </React.Fragment>
    )
  }
}

export default connect()(AddWombat)
