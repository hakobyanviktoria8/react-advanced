import React, { useEffect, useState } from 'react'

function WindowWidth() {
    const [width, setWidth] = useState()

    useEffect(() => {
        const resizeFunc = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", resizeFunc);
    
        return () => window.removeEventListener("resize", resizeFunc);
    }, [])
    
  return (
    <div>
        <h2>Window Width: {window.innerWidth || width}</h2>
        <br/>
    </div>
  )
}

export default WindowWidth