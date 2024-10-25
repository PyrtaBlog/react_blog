
import { PostItem } from "./PostItem"

export function PostList({posts, title, deletePost}) {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(post => <PostItem key={post.id} post={post} deletePost={deletePost} />)}
        </div>
    )
}