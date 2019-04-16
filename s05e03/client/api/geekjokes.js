import request from 'superagent'

const url = 'https://geek-jokes.sameerkumar.website/api'

export function getGeekJokes() {
  return request
  .get(url)
  .then(res => {
    return res.body
  })
}
