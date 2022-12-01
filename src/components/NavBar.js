import React from 'react'
import Search from './Search'
import "./../util/styles/NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
      <Link to="/">Logo</Link>
      <Search />
      <Link to="/examples">Examples</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default NavBar