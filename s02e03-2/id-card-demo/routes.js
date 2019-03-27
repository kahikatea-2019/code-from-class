// Require npm packages
const express = require('express')
// Require local files
const employee = require('./employee')
// Create router
const router = express.Router()

// Tell express how it should process the body of HTTP requests
router.use(express.urlencoded({ extended: false }))

// GET /
router.get('/', (req, res) => {
  res.send('Woohoo!!')
})

// GET /card
router.get('/card', (req, res) => {
  employee.getEmployee((err, employeeData) => {
    if (err) return res.status(500).send('file access error')
    res.set('Content-Type', 'image/svg+xml')
    res.render('idcard', employeeData)
  })
})

router.get('/employee', (req, res) => {
  // Show the HTML form
  res.render('employee')
})

router.post('/employee', (req, res) => {
  const employeeObj = req.body
  employee.saveEmployee(employeeObj, err => {
    if (err) return res.status(500).end()
    res.redirect('/card')
  })
})

module.exports = router
