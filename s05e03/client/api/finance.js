import request from 'superagent'

const url = 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey='
const token = '044cdf6ea4ae4a1d8cbdd309903569c1'

export function getFinance() {
  return request
  .get(`${url}${token}`)
  .then(res => {
    return res.body.articles
  })
}
