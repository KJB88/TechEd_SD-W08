import Link from 'next/link'
import Heading from '../heading'
import { getAllTags } from '../ts/dbHandler'

export default async function Tags () {
  const tags = await getAllTags()
  return (
    <>
      <Heading data={{ name: 'Tags' }} />
      <div className='border-b-2 border-b-white'>
        <ul className='flex flex-col-nowrap justify-center border-b-white border-b-2 gap-2'>
            {tags.map((tag) => (
                <li key={tag.id}>
                    <Link href={`/tags/${tag.id}`}>{tag.name}</Link>
                </li>
        ))}
        </ul>
      </div>
    </>
  )
}
