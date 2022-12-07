import React from 'react'
import Count from './Count';
import "./../../util/styles/Games.css"
import Boxs from './Boxs';
import AddItem from './AddItem';
import Layout from '../layout/Layout';
import WindowWidth from './WindowWidth';

function Games() {
  return (
    <Layout>
      <div className='Games'>
        <WindowWidth />
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