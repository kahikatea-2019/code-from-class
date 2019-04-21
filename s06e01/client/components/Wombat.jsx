import React from 'react'

import { deleteWombat } from '../actions/wombat'

export default class Wombat extends React.Component {
  render () {
    const { wombat, dispatch } = this.props

    return (
      <li>
        <span>{wombat}</span>
        <button onClick={() => dispatch(deleteWombat(wombat))}
        >Delete</button>
      </li>
    )
  }
}
