import Image from 'next/image'
import Link from 'next/link'

export default async function Posts () {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resp.json();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: {id: number, title: string}) => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>
  )
}
