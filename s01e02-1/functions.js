// this will totally work
// because doWork is hoisted
doWork()

function doWork () {
  // console.log(arguments)
  // for (let item of arguments) {
  //   console.log(item)
  // }
}
doWork('foo', 'bar')

// this won't work
// because doMoreWork hasn't been defined yet
// doMoreWork()

const doMoreWork = function () {}
doMoreWork()

const doEvenMoreWork = () => {}
doEvenMoreWork()

// don't need parenthesis when there is only one input parameter
// const go = foo => {}
// const go = (foo) => {}

// don't need curly brackets when you want to return a single line
const isFour = num => num === 4

// or you can do it like this
const isFive = num => {
  return num === 5 // need the 'return' keyword here
}

const show = str => console.log(str)

function doSomething (fn) {
  fn('inside doSomething')
}

doSomething(show)
