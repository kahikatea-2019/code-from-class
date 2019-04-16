import request from 'superagent'

const url = 'https://xkcd.now.sh'

export function getXkcd() {
  return request
  .get(url)
  .then(res => {
    return res.body
  })
}
