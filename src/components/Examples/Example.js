import React, { useState } from 'react'
import Count from './Count';
import "./../../util/styles/Example.css"
import Boxs from './Boxs';
import AddItem from './AddItem';
import Layout from '../Layout';

function Example() {
       

  return (
    <Layout>
        <hr />
        <Count />
        <hr/>
        <AddItem />
        <hr/>
        <Boxs />
        <hr />
    </Layout>
  )
}

export default Example