import React from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'semantic-ui-react'

import { deleteAardvark, updateAardvark } from '../actions/aardvark'

class Aardvark extends React.Component {
  state = {
    editing: false,
    aardvark: this.props.aardvark
  }

  editAardvark = () => this.setState({ editing: true })

  changeHandler = e => {
    this.setState({
      aardvark: e.target.value
    })
  }

  submitHandler = () => {
    const { updateAardvark, aardvark } = this.props
    updateAardvark(aardvark, this.state.aardvark)
    this.setState({ editing: false })
  }

  render () {
    const { deleteAardvark, aardvark } = this.props

    return (
      <li>
        {
          this.state.editing
            ? <React.Fragment>
              <Input size='mini' type='text'
                value={this.state.aardvark}
                onChange={this.changeHandler} />
              <Button size='mini' primary
                onClick={this.submitHandler}>Update</Button>
            </React.Fragment>
            : <span onClick={this.editWombat}>{aardvark}</span>
        }{' '}
        <Button size='mini' secondary
          onClick={() => deleteAardvark(aardvark)}>Delete</Button>
      </li>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteAardvark: aardvark => dispatch(deleteAardvark(aardvark)),
    updateAardvark: (aardvark, change) => dispatch(updateAardvark(aardvark, change))
  }
}

export default connect(null, mapDispatchToProps)(Aardvark)
