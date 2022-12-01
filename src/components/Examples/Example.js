import React, { useState } from 'react'
import Count from './Count';
import "./../../util/styles/Example.css"
import Boxs from './Boxs';
import AddItem from './AddItem';

function Example() {
       

  return (
    <div>
        <hr />
        <Count />
        <hr/>
        <AddItem />
        <hr/>
        <Boxs />
        <hr />
    </div>
  )
}

export default Example