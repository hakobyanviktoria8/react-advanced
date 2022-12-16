import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from '../../UI/button/Button'
import styles from "./../../../util/styles/Posts.module.css"
import { PostForm } from './PostForm'
import { PostsList } from './PostsList'
import { SelectSortPosts } from './SelectSortPosts'

export const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [sortVal, setSortVal] = useState("")
  const [searchVal, setSearchVal] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data?.slice(0,10));
      setLoading(false)
    })
  } ,[])
    
  const addPosts = (newPostItem) => {
    setPosts([...posts, newPostItem])
  }

  const handleDelPost = (id) => {
    setPosts(posts?.filter(p => p?.id !== id))
  }

  const handleSortPost = (sort) => {
    setSortVal(sort);
    setPosts([...posts].sort((a, b) => a[sortVal]?.localeCompare(b[sortVal])))
  }

  const handleSearchPost = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchVal}`);
      if(response.status === 200) {
        const data = await response.json();
        setPosts([data])
        setLoading(false)
      } else {
        setPosts(null)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeSearchId = (e) => {
    if(isNaN(e.target.value)) {
      return false
    } else {
      setSearchVal(e.target.value)
    }
  }

  return (
    <div>
      <div className={styles.titleSearch}>
        <h2 className={styles.title}>Posts</h2>
        <div>
          <input 
            placeholder='Search post with id...'
            value={searchVal} 
            onChange={handleChangeSearchId}
            pattern="[0-9.]+"
            type="text"
          />
          <Button disabled={!searchVal} onClick={handleSearchPost}>Search</Button>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <PostForm addPosts={addPosts}/>

        <SelectSortPosts 
          sortVal={sortVal} 
          onChange = {handleSortPost}
        />
      </div>
      {
          loading ? 
            <h2>Loading...</h2>
            :
            <PostsList posts={posts} handleDelPost={handleDelPost}/>   
      }
    </div>
  )
}
