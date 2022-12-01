import React, { useState } from 'react'
import Count from './Count';
import "./../../util/styles/Example.css"
import Boxs from './Boxs';
import AddItem from './AddItem';
import Layout from '../Layout';

function Example() {
  return (
    <Layout>
      <div className='Example'>
        <Count />
        <hr/>
        <AddItem />
        <hr/>
        <Boxs />
      </div>
    </Layout>
  )
}

export default Example