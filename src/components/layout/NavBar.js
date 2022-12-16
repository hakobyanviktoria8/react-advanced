import React from 'react'
import Search from './Search'
import "./../../util/styles/NavBar.css"
import { Link } from 'react-router-dom'

function NavBar({mode, toggleMode}) {
  return (
    <div className={mode ? "dark NavBar" : "NavBar"}>
      <Link to="/">Logo</Link>
      <Search />
      <Link to="/games">Games</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/signup">Signup</Link>
      <button 
        onClick={toggleMode} 
        className={!mode ? "dark" : ""}
      />
    </div>
  )
}

export default NavBar