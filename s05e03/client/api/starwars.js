import request from 'superagent'

const url = 'https://swapi.co/api/people/'
const person = Math.floor(Math.random() * 50)

export function getStarWars() {
  return request.get(url + person)
    .then(res => res.body)
}
