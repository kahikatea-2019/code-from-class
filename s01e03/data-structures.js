const bryce = {
  id: 123456789,
  firstName: 'Bryce',
  lastName: 'Kehoe',
  dateOfBirth: '19-03-19XX', // you'll never know
  active: false,
  papers: {
    compSci373: {
      test1: 'A+'
    },
    compSci350: {
      exam: 'A+++'
    }
  }
}

console.log(bryce.papers.compSci350.exam)
// OR
const papers = bryce.papers
console.log(papers.compSci350.exam)

console.log(Object.keys(bryce))
console.log(Object.values(bryce))
