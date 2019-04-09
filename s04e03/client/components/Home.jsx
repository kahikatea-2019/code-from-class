import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <h1>My React App</h1>
      <Link to="/colours">View colours</Link>
    </React.Fragment>
  )
}

export default Home
