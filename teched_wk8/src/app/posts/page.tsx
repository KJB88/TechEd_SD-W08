/* POSTS */
import { getAllPostsWithUserJoin, addNewPost } from '@/app/ts/dbHandler'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import Heading from '../heading'
import ContentModifier from '../contentMod'
import UserMini from '@/app/userMini'
import Post from '../post'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export const metadata = {
  title: 'ZonePDA: All Posts',
  description: `View all Posts in ZonePDA.`
}

export default async function Posts ({
  searchParams
}: {
  searchParams: { sort: string }
}) {
  const allPosts = await getAllPostsWithUserJoin()
  console.log(allPosts)
  async function submitPost (formData: FormData) {
    'use server'

    const header = formData.get('header') as string
    const content = formData.get('content') as string

    await addNewPost(header, content, 1, 1)

    revalidatePath('/posts')
  }

  return (
    <>
      <Heading data={{ name: 'Posts' }} />
      <div>
        <SignedIn>
        <form
          className='flex flex-col border-b-white border-b-2 pb-2'
          action={submitPost}
        >
          <label htmlFor='title'>Title:</label>
          <input className='text-black' type='text' name='header' />
          <label htmlFor='content'>Message:</label>
          <input className='text-black' type='text' name='content' />
          <button className='bg-gray-300 text-black mt-2'>Submit Post</button>
        </form>
        </SignedIn>
        <SignedOut>
          <div className="text-center border-b-white border-b-2 pb-2">
          You may view but not create posts or comments. Please sign in or sign up if you would like to participate.
          </div>
        </SignedOut>
        <ul>
          {allPosts.map(post => (
                  <li
                  className='drop-shadow border-b-white border-b-2 flex flex-col-nowrap'
                  key={post.id}
                >
            <Post
              data={{
                id: post.id,
                name: post.name,
                header: post.header,
                timeDate: post.date_created.toLocaleString(),
                content: post.content,
                pfp: post.pfp,
                faction: post.faction,
                location: post.location
              }}
            />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
