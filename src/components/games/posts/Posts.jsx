import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFetching } from '../../../util/hooks/useFetching'
import Layout from '../../layout/Layout'
import { Button } from '../../UI/button/Button'
import styles from "./../../../util/styles/Posts.module.css"
import { PostForm } from './PostForm'
import { PostsList } from './PostsList'
import { SelectSortPosts } from './SelectSortPosts'

export const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [sortVal, setSortVal] = useState("")
  const [searchVal, setSearchVal] = useState("")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const [fetchPosts, loading, postError] = useFetching(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    if(response.status === 200) {
      const data = await response.json();
      setPosts(data)
    } else {
      setPosts(null)
    }
  })

  useEffect(()=> {
    fetchPosts()
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

  const [handleSearchPost] = useFetching(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchVal}`)
    if(response.status === 200) {
      const data = await response.json();
      setPosts([data])
    } else {
      setPosts(null)
    }
  })
  
  const handleChangeSearchId = (e) => {
    if(isNaN(e.target.value)) {
      return false
    } else {
      setSearchVal(e.target.value)
    }
  }

  return (
    <Layout>
      <div className={styles.formWrapper}>
        <PostForm addPosts={addPosts}/>

        <div className={styles.formSearch}>
          <input 
            placeholder='Search post with id...'
            value={searchVal} 
            onChange={handleChangeSearchId}
            pattern="[0-9.]+"
            type="text"
          />
          <Button disabled={!searchVal} onClick={handleSearchPost}>Search</Button>
        </div>

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
    </Layout>
  )
}
