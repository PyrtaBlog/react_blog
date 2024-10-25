import React from "react"

import {Input} from './UI/Input/Input.jsx'
import {Button} from './UI/Button/Button.jsx'

export function PostForm({createPost}) {
    const [post, setPost] = React.useState({title: '', body: ''})

    function addPost(e) {
        e.preventDefault()
        createPost({title: post.title, body: post.body})
        setPost({title: '', body: ''})
    }

    return (
        <form className='PostForm'>
            <Input type="text" placeholder="Title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
            <Input type="text" placeholder='Body' value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} />
            <Button onClick={addPost} value='Add post' children='Add post' />
        </form>
    )
}