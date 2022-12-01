import React, { useEffect, useState } from 'react'

function Item({item}) {
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false)

  const handleMoreData = () => {
    setShowMore(prev => !prev)
    fetch(item.url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(err => console.log(err))
  }

  return (
    <div className='item'>
        <img src={item.avatar_url} className="item_img"/>
        <h3>{item.login}</h3>
        <button onClick={handleMoreData}>{!showMore ? "Show more" : "Hide"}</button>
        {data && showMore &&
          <>        
            <p>{data?.name}</p>
            <p>Followers: {data?.followers}</p>
            <p>Following: {data?.following}</p>
          </>
        }
    </div>
  )
}

export default Item