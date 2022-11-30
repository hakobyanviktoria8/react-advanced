import React, { useState } from 'react'
import Count from './Count';
import "./../util/styles/Example.css"

function Example() {
    const [arr,setArr]= useState(["item 0", "item 1"]);
    const handleClick = () => {
        setArr([...arr, `Item ${arr.length}`])
    }

    // example2
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    const subCount = () => {
        setCount(prev => prev - 1)
    }

  return (
    <div>
        <div className='countWrapper'>
            <button onClick={subCount}>-</button>
            <Count count={count}/>
            <button onClick={addCount}>+</button>
        </div>
        <hr/>
        <button onClick={handleClick}>Add item</button>
        {arr && arr.map((x, idx)=><p key={idx}>{x}</p>)}
    </div>
  )
}

export default Example