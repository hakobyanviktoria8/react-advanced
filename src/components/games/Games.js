import React, { useState } from 'react'
import "./../../util/styles/Games.css"
import Layout from '../layout/Layout';
import Game from './Game';
import { linkData } from './constants';
import NavLink from './NavLink';

function Games() {
  const [active, setActive] = useState(null);
  
  const handleClick = (id) => {  
    setActive(id);
  }

  return (
    <Layout>
      <div className='Games'>
        <div className='leftSide'>
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