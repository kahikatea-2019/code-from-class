const people = [
  {
    name: 'Marsha',
    location: 'Glasgow'
  },
  {
    name: 'Louise',
    location: 'Auckland'
  },
  {
    name: 'Wally',
    location: 'Opotiki'
  },
  {
    name: 'Jane',
    location: 'Auckland'
  }
]

const uppercasePeople = people.map(function (person) {
  return {
    name: person.name.toUpperCase(),
    location: person.location
  }
})

// console.log(people)
// console.log(uppercasePeople)

const vegetables = ['potato', 'onion', 'carrot']
console.log(vegetables)

const uppercaseVegetables = vegetables.map(function (vegetable) {
  return vegetable.toUpperCase()
})
console.log(vegetables.map(v => v.toUpperCase()))

const wally = people.find(person => {
  return person.name === 'Wally'
})
console.log('Wally lives in', wally.location)

console.log(people.find(p => p.name === 'Wally'))

const theAucklanders = people.filter(
  person => person.location !== 'Auckland'
)
console.log(theAucklanders)
