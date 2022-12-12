import React, { useState } from 'react'
import "./../../util/styles/Tenzies.css"
import Point from './Point'



function Tenzies() {
  const [allPoints, setAllPoints] = useState(Array.from({length: 10}, () => Math.floor(Math.random() * 9) + 1))

  function refreshPage() {
    setAllPoints(Array.from({length: 10}, () => Math.floor(Math.random() * 9) + 1))
    console.log(2222, allPoints);
  }

  return (
    <div className='Tenzies'>
      <h2>Tenzies game</h2>
      <div className='tenziesWrapper'>
        <div className='tenziesPoints'>
          {allPoints.map((item, idx) => <Point key={idx} item={item}/>)}
        </div>
        <button onClick={refreshPage}>Roll</button> 
      </div>
    </div>
  )
}

export default Tenzies