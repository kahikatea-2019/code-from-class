class GenericComponent {
  constructor (owner) {
    this.owner = owner
    this.emphasisWord = 'really'
  }

  render () {
    const owner = this.owner ? ` ${this.owner}` : '' // ternary operator
    return `I'm ${this.emphasisWord} going to need more${owner}.`
  }
}

class SpecificComponent extends GenericComponent {
  constructor (owner) {
    super(owner)
    this.emphasisWord = 'seriously'
  }

  render () {
    const owner = this.owner ? ` ${this.owner}` : '' // ternary operator
    return `This is ${this.emphasisWord} better than a generic component${owner}.`
  }
}

// const generic = new GenericComponent('Don')
// const result = generic.render()

const specific = new SpecificComponent('Becky')
const result = specific.render()

// eslint-disable-next-line no-console
console.log(result)
