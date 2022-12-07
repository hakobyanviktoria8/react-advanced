import React from 'react'
import "./../../util/styles/Footer.css"

function Footer({mode}) {
  return (
    <div className={mode ? "dark footer" : "footer"}>Footer</div>
  )
}

export default Footer