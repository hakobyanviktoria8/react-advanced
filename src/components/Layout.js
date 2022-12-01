import React from 'react'
import NavBar from './NavBar'

function Layout({children}) {
  return (
    <div>
        <NavBar />
        {children}
        <p>Footer</p>
    </div>
  )
}

export default Layout