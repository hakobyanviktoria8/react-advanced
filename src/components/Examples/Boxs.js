import React, { useState } from 'react'
import {boxData} from "../../util/helper/boxData"
import Box from './Box';
import BoxLocalState from './BoxLocalState'

function Boxs() {
  const [squares, setSquares] = useState(boxData)

  const toggel = (id) => {
    setSquares(prev => {
      const newSquares = [];
      for (let i=0; i < prev.length; i++) {
        const currentSquare = prev[i];
        if(currentSquare.id === id){
          const updateSquare = {
            ...currentSquare,
            bool: !currentSquare.bool
          }
          newSquares.push(updateSquare)
        } else {
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
    console.log("Clicked", id, squares);
  }

  return (
    <div className='boxWrapper'>
        {boxData?.map(box => 
            <BoxLocalState box={box}  key={box.id} />
        )}
        <hr />
        {squares?.map(box => 
          <Box 
            bool={box.bool}  
            key={box.id} 
            id={box.id}
            handleClick={toggel}
          />
        )}
    </div>
  )
}

export default Boxs