// Normal synchronous function
// function getData () {
//   return {
//     foo: 'data'
//   }
// }

// Synchronous function that accepts a callback
function getData (callback) {
  const data = {
    foo: 'data'
  }
  callback(data)
}

function showData (data) {
  console.log(data)
}

// Normal sync functionc all
// const data = getData()
// console.log(data)

// Call sync function with a callback
getData(showData)

console.log('All done!')
