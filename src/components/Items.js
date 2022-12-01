import React, { useState, useEffect } from 'react'
import "./../util/styles/Items.css";
import Item from './Item';

function Items() {
    const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
          .then((response) => response.json())
          .then((data) => setItems(data))
          .catch(err => console.log(err))
  },[])
    
  return (
    <div>
        <h1>Items list</h1>
        {!items && <h2>Loading...</h2>}
        <div className='itemsWrapper'>
            {items && items.map(item => 
                <Item key= {item.id} item = {item} />
            )}
        </div>
    </div>
  )
}

export default Items