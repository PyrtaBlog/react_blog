import React from 'react';
import { Button } from './UI/Button/Button';
export function PostItem({post, deletePost}) {
    return (
        <div className='PostItem'>
            <div>
                <strong>{post.id}. {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <Button children='Удалить' onClick={()=>deletePost(post.id)}/>
        </div>
    )
}