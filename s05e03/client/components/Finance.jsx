import React from 'react'
import { getFinance } from '../api/finance'

export default class Finance extends React.Component {
  state = {
    finance: []
  }

  componentDidMount() {
    getFinance()
      .then(res => {
        this.setState({
          finance: res
        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <h2>Finance Times</h2>
        {this.state.finance.slice(0, 3).map(article => {
          return (
            <div key={article.index}>
              <h5>{article.title}</h5>
              <p>{article.content}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
