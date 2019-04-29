const creatures = {
  animal: 'bear'
}

function showAnimal (wowChar, subChar) {
  console.log('Animal:', wowChar, this.animal, subChar)
}

showAnimal.call(creatures, '*', '#')
