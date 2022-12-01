import React from 'react'
import Count from './Count';
import "./../../util/styles/Games.css"
import Boxs from './Boxs';
import AddItem from './AddItem';
import Layout from '../layout/Layout';

function Games() {
  return (
    <Layout>
      <div className='Games'>
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