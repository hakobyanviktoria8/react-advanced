import React from 'react'
import { useState } from 'react'
import { postsData } from '../../../util/helper/postsData'
import styles from "./../../../util/styles/Posts.module.css"
import { PostForm } from './PostForm'
import { PostsList } from './PostsList'

export const Posts = () => {
  const [posts, setPosts] = useState(postsData)

  const addPosts = (newPostItem) => {
    setPosts([...posts, newPostItem])
  }

  const handleDelPost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div>
        <h2 className={styles.title}>Posts</h2>
        <PostForm addPosts={addPosts}/>
        {
          !posts.length ? <h2>Post not found...!</h2>
          :
          <PostsList posts={posts} handleDelPost={handleDelPost}/>   
        }
    </div>
  )
}
