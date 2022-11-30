import React from 'react'

function Item({item}) {
  return (
    <div className='item'>
        <img src={item.avatar_url} className="item_img"/>
        <h3>{item.login}</h3>
    </div>
  )
}

export default Item