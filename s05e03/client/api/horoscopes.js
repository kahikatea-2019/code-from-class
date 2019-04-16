import request from 'superagent'

const url = 'https://aztro.sameerkumar.website?sign='

export function getHoroscopes(sign) {
  return request
  .post(url + sign + '&day=today')
  .then(res => {
    return res.body
  })
}
