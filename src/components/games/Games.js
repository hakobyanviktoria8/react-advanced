import React, { useState } from 'react'
import "./../../util/styles/Games.css"
import Layout from '../layout/Layout';
import Game from './Game';
import { linkData } from './constants';
import NavLink from './NavLink';
import { Button } from '../UI/button/Button';

function Games() {
  const [active, setActive] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  
  const handleClick = (id) => { 
    console.log("handleClick Game"); 
    setActive(id);
  }

  const handleClickShow = () => {
    console.log("handleClickShow Game")
    setShowMenu(!showMenu)
  }

  return (
    <Layout>
      <div className='Games'>
        <div 
          className='leftSide'
          style={{  marginLeft: showMenu ? "-12%" : ""}}
        >
        <Button onClick={handleClickShow}>
          {showMenu ? "X" : "<" }
        </Button>
        <br />
        {
          linkData.map(item => 
            <NavLink 
              key={item.id}
              to={item.to} 
              title={item.title} 
              handleClick={() => handleClick(item.id)}
              isActive={active === item.id}
            />
          )
        }
        </div>
        <div className='rightSide'>
          <Game />
        </div>
      </div>
    </Layout>
  )
}

export default Games