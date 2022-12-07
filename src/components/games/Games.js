import React, { useState } from 'react'
import Count from './Count';
import "./../../util/styles/Games.css"
import Boxs from './Boxs';
import AddItem from './AddItem';
import Layout from '../layout/Layout';
import WindowWidth from './WindowWidth';

function Games() {
  const [show, setShow] = useState(true)

  return (
    <Layout>
      <div className='Games'>
      <button onClick={()=>setShow(!show)}>Toggle</button>

      {show && <WindowWidth />}
        <hr />
        <Count />
        <hr/>
        <AddItem />
        <hr/>
        <Boxs />
      </div>
    </Layout>
  )
}

export default Games