const express = require('express')
const router = express.Router()

const db = require('../db')

// router.get('/', (req, res) => {
//   db.getStudents()
//     .then(students => {
//       const renamedStudents = students.map(student =>
//         ({
//           id: student.id,
//           name: student.student,
//           username: student.username
//         }))
//       res.render('students', { students: renamedStudents })
//     })
//     .catch(err => displayError(res, err))
// })

router.get('/', (req, res) => {
  db.getStudents()
    .then(students => {
      const capitalisedStudents = students.map(student =>
        ({
          id: student.id,
          name: capitalise(student.name),
          username: student.username
        }))
      res.render('students', { students: capitalisedStudents })
    })
    .catch(err => displayError(res, err))
})

router.get('/add', (req, res) => res.render('add-form'))

router.post('/', (req, res) => {
  const newStudent = {
    student: req.body.name,
    username: req.body.username
  }

  db.addStudent(newStudent)
    .then(() => res.redirect('/'))
    .catch(err => displayError(res, err))
})

// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getStudentById(id)
//     .then(student => {
//       student = {
//         name: capitalise(student.name),
//         username: student.username
//       }
//       res.render('student', student)
//     })
// })

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getStudentById(id)
    .then(student => {
      student = {
        name: capitalise(student.name),
        username: student.username
      }
      res.render('student', student)
    })
})

// Global function
function displayError (res, err) {
  res.status(500).send(err.message)
}

function capitalise (text) {
  return text[0].toUpperCase() + text.substring(1)
}

module.exports = router
