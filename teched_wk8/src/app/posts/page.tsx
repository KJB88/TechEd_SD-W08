/* POSTS */

import {
  getAllPostsWithUserJoin,
  addNewPost
} from '@/app/ts/dbHandler'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

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

  const postHTML = allPosts.map(post => (
    <li className='drop-shadow border-b-white border-b-2' key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 className='text-center text-xl font-bold'>{post.header}</h2>
        <p>{post.content}</p>
        by <span className='font-bold'>{post.name}</span> at{' '}
        <span className='font-bold'>{post.date_created.toString()}</span>
      </Link>
    </li>
  ))

  async function submitPost(formData : FormData)
  {
    "use server";

    const header = formData.get("header") as string;
    const content = formData.get("content") as string;
     
    await addNewPost(header, content, 1, 1);

    revalidatePath("/posts");
  }

  return (
    <div>
      <h1 className='drop-shadow heading'>Posts</h1>
      <form className='flex flex-col border-b-white border-b-2 pb-2' action={submitPost}>
        <label htmlFor='title'>Title:</label>
        <input className="text-black" type='text' name='header' />
        <label htmlFor='content'>Message:</label>
        <input className="text-black" type='text' name='content' />
        <button className="bg-gray-300 text-black mt-2">Submit Post</button>
      </form>
      <ul>{postHTML}</ul>
    </div>
  )
}
