
import { PostItem } from "./PostItem"

export function PostList({posts, title, deletePost}) {
    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '20px'}}>{title}</h2>
            {posts.map(post => <PostItem key={post.id} post={post} deletePost={deletePost} />)}
        </div>
    )
}