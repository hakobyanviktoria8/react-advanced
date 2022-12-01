import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import "./../util/styles/Layout.css"

function Layout({children}) {
  return (
    <>
        <NavBar />
        <div className='LayoutChild'>
          {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout