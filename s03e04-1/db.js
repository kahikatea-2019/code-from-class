const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getStudents,
  getStudentById,
  addStudent
}

function getStudents () {
  return db('students')
    .select('id', 'student as name', 'username')
}

function getStudentById (id) {
  return db('students')
    .where('id', id)
    .first()
    .select('id', 'student as name', 'username')
}

function addStudent (student) {
  return db('students')
    .insert(student)
}
