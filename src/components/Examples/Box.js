import React from 'react'

function Box({bool, id, handleClick}) {
  return (
    <div 
        onClick={()=>handleClick(id)} 
        style={{backgroundColor: bool ? "red" : ""}}
    />
  )
}

export default Box