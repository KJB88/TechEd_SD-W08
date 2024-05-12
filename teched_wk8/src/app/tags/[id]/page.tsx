import Heading from '@/app/heading'
import { getPostsByTagID } from '@/app/ts/dbHandler'
import Link from 'next/link'
import ContentModifier from '@/app/contentMod'

export default async function TagFilter ({
  params
}: {
  params: { id: number }
}) {
  const posts = await getPostsByTagID(params.id)
  console.log(posts)
  return (
    <>
      <Heading data={{ name: posts[0].name }} />
      <ul>
        {posts.map(post => (
          <li className='drop-shadow border-b-white border-b-2' key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2 className='text-center text-xl font-bold'>{post.header}</h2>
              <p>{post.content}</p>
              by <span className='font-bold'>{post.name}</span> at{' '}
              <span className='font-bold'>{post.date_created.toString()}</span>
            </Link>
            <ContentModifier data={{ id: post.id, isPost: true }} />
          </li>
        ))}
      </ul>
    </>
  )
}
