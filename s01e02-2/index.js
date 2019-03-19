const cowsay = require('cowsay')

const options = {
  text: "I'm a moooodule",
  e: 'oO',
  T: 'U '
}

const speaking = cowsay.say(options)

console.log(speaking)
