import React, { useState } from 'react'
import "./../util/styles/Search.css"

function Search() {
    const [searchValue, setSearchValue]= useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClick = () => {
        console.log(searchValue);
    }

  return (
    <div className='searchWrapper'>
        <input 
            type="search" 
            placeholder='Search items...' 
            value={searchValue}
            onChange={handleChange}
            />
        <button             
            className={searchValue && "active"}
            disabled={!searchValue}
            onClick={handleClick}
        >Search</button>  
    </div>
  )
}

export default Search