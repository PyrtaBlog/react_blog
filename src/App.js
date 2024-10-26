import React from 'react'

import './styles/App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import { Select } from './components/UI/Select/Select';

export function App() {
  const [posts, setPosts] = React.useState([
    {id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 2, title: 'Post 2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 3, title: 'Post 3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  ])
  
  const sortedOptions = [
    {name: 'По заголовку', value: 'title'},
    {name: 'По описанию', value: 'body'},
  ]

  const [sortBy, setSortBy] = React.useState(sortedOptions[0].value)

  const createPost = (newPost) => {
    setPosts([...posts, {...newPost, id: posts.length + 1}])
  }
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }
  const sortedPosts = (sortBy) => {
    setSortBy(sortBy)
    setPosts([...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy])))
  }

  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      <Select 
        value={sortBy}
        options={sortedOptions}
        onChange={sortedPosts}
      />
      {
        posts.length 
        ? <PostList posts={posts} title='Список постов 1' deletePost={deletePost} /> 
        : <h2 style={{textAlign: 'center', margin: '20px'}}>Список постов пуст</h2>
      }
    </div>
  )
}