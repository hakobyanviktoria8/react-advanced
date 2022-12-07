import React from 'react'
import "./../../util/styles/Games.css"
import Layout from '../layout/Layout';
import { Link, useParams } from 'react-router-dom';
import Game from './Game';

function Games() {
  const { params } = useParams();

  const handleSelect = (e) => {  
    e.target.className = e.target.href.split("/").slice(-1)[0] === params ? "active" : ""   
  }

  return (
    <Layout>
      <div className='Games'>
        <div className='leftSide'>
          <Link to={"/games/resize"} onClick={handleSelect}>Resize</Link>
          <Link to={"/games/count"} onClick={handleSelect}>Count</Link>
          <Link to={"/games/addItem"} onClick={handleSelect}>AddItem</Link>
          <Link to={"/games/boxs"} onClick={handleSelect}>Boxs</Link>
          <Link to={"/games/textEditor"} onClick={handleSelect}>TextEditor</Link>
        </div>
        <div className='rightSide'>
          <Game />
        </div>
      </div>
    </Layout>
  )
}

export default Games