const creatures = {
  animal: 'bear'
}

function showAnimal () {
  const args = arguments
  console.log('Animal:', args[0], this.animal, args[1])
}

showAnimal.apply(creatures, ['*', '#'])
