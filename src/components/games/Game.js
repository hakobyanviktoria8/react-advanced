import React, { useState } from 'react'
import { useParams } from 'react-router';
import WindowWidth from './WindowWidth';
import Count from './Count';
import AddItem from './AddItem';
import Boxs from './Boxs';
import TextEditor from './TextEditor';

function Game() {
    const [show, setShow] = useState(true)
    const { params } = useParams();
 
  return (
    <div>
        {!params && <h2>Select your prifer Game</h2>}
        {params === "resize" && 
            <>
                <button 
                    className='btnToggle'
                    onClick={()=>setShow(!show)}
                >Toggle</button>
                {show && <WindowWidth />}
            </>
         }  
         {params === "count" && <Count />}               
         {params === "addItem" && <AddItem />}               
         {params === "boxs" && <Boxs />}               
         {params === "textEditor" && <TextEditor />}               
    </div>
  )
}

export default Game