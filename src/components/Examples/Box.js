import React from 'react'

function Box({bool, handleClick}) {
  return (
    <div 
        onClick={handleClick} 
        style={{backgroundColor: bool ? "red" : ""}}
    />
  )
}

export default Box