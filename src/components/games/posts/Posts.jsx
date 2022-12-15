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

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data?.slice(0,10)))
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

  const handleSearchPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${searchVal}`)
    .then(response => response.json())
    .then(data => setPosts([data]))
  }

  return (
    <div>
      <div className={styles.titleSearch}>
        <h2 className={styles.title}>Posts</h2>
        <div>
          <input 
            placeholder='Search post with id...'
            value={searchVal} 
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Button onClick={handleSearchPost}>Search</Button>
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
        !posts?.length ? <h2>Post not found...!</h2>
        :
        <PostsList posts={posts} handleDelPost={handleDelPost}/>   
      }
    </div>
  )
}
