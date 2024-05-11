import Link from 'next/link'

async function generateMetadata({params}: {params: {id: number}})
{
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const post = await result.json();

    return {
        title: 'All of the posts. All. Of. Them.',
        description: `Why can't I hold all of these posts!?`,
    };
}


export default async function Posts ({
  searchParams
}: {
  searchParams: { sort: string }
}) {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await resp.json()

  if (searchParams.sort === 'desc') posts.reverse()
  return (
    <div>
      <h1>Posts</h1>

      <Link href='/posts'>Sort Asc</Link>
      <Link href='/posts?sort=desc'>Sort Desc</Link>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
