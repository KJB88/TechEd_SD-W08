import Link from "next/link"
import { redirect } from "next/navigation"
export default function Heading ({data}: {data:{name : string}}) {

  return (
    <>
    <ul className="flex flex-col-nowrap justify-center border-b-white border-b-2 gap-2">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/tags">Tags</Link></li>
    </ul>
      <h1 className='drop-shadow heading'>{data.name}</h1>
    </>
  )
}
