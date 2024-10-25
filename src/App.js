import React from 'react'

import './styles/App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

export function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 2, title: 'Post 2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 3, title: 'Post 3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, {...newPost, id: posts.length + 1}])
  }
  const deletePost = (id) => {
    setPosts.filter(post => post.id !== id)
  }
  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      <PostList posts={posts} title='Список постов 1' deletePost={deletePost} />
    </div>
  )
}