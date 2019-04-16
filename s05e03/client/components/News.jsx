import React from 'react'
import { getNews } from '../api/news'

export default class News extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    getNews()
      .then(res => {
        this.setState({
          news: res
        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <h2>Local News</h2>
        {this.state.news.slice(0, 3).map(article => {
          return (
            <div key={article.index}>
              <h5>{article.title}</h5>
              <em>{article.description}</em>
              <p>{article.content}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
