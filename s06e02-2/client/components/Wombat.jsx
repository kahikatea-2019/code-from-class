import React from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'semantic-ui-react'

import { deleteWombat, updateWombat } from '../actions/wombat'

class Wombat extends React.Component {
  state = {
    editing: false,
    wombat: this.props.wombat
  }

  editWombat = () => this.setState({ editing: true })

  changeHandler = e => {
    this.setState({
      wombat: e.target.value
    })
  }

  submitHandler = () => {
    const { updateWombat, wombat } = this.props
    updateWombat(wombat, this.state.wombat)
    this.setState({ editing: false })
  }

  render () {
    const { deleteWombat, wombat } = this.props

    return (
      <li>
        {
          this.state.editing
            ? <React.Fragment>
              <Input size='mini' type='text'
                value={this.state.wombat}
                onChange={this.changeHandler} />
              <Button size='mini' primary
                onClick={this.submitHandler}>Update</Button>
            </React.Fragment>
            : <span onClick={this.editWombat}>{wombat}</span>
        }{' '}
        <Button size='mini' secondary
          onClick={() => deleteWombat(wombat)}>Delete</Button>
      </li>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteWombat: wombat => dispatch(deleteWombat(wombat)),
    updateWombat: (wombat, change) => dispatch(updateWombat(wombat, change))
  }
}

// Alternative if you only need to pass parameters through directly
// const mapDispatchToProps = {
//   deleteWombat,
//   updateWombat
// }

export default connect(null, mapDispatchToProps)(Wombat)
