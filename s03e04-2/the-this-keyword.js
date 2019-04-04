const calculator = {
  constant: 7,

  add: function (num1, num2) {
    return num1 + num2 + this.constant
  }
}

const myArray = [
  'foo',
  function () {
    console.log(this[0])
  }
]

// this is so cool! and a little unexpected
myArray[1]()

// will work
const result = calculator.add(5, 8)

// won't work
const addNums = calculator.add
const badResult = addNums(5, 8)

// eslint-disable-next-line no-console
console.log(result)
