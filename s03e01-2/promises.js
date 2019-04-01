const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

// consuming promises
waitRandom()
  .then(getData)
  .then(getCount)
  .then(showDetails)
  .catch(showError)
  .finally(closeDb)

function getCount (arr) {
  return Promise.resolve({
    rows: arr,
    length: arr.length
  })
}

function showDetails (details) {
  console.log('Length:', details.length)
  details.rows.forEach(row => {
    console.log(row.id, row.text)
  })
}

function showError (err) {
  console.error(err)
}

function closeDb () {
  db.destroy()
}

function getData (time) {
  console.log('Time:', time)
  return db('tasks').select() // async
  // return db('tasks')
  //   .where({ id: 1 })
  //   .del()
}

// producing promises
function waitRandom () {
  const time = Math.floor(Math.random() * 4000)
  return new Promise((resolve, reject) => {
    if (time % 2) { // odd
      setTimeout(() => {
        resolve(time)
      }, time)
    } else { // even
      reject(new Error('Time was an even value: ' + time))
    }
  })
}
