import Link from 'next/link'
import UserMini from './userMini'
import ContentModifier from './contentMod'

export default function Post ({
  data
}: {
  data: {
    id: number
    name: string
    header: string
    timeDate: string
    content: string
    pfp: string
    faction: string
    location: string
  }
}) {

  return (
    <>
        <Link href={`/posts/${data.id}`}>
          <h2 className='text-center text-xl font-bold'>{data.header}</h2>
          <span className='font-bold text-center w-full'>{data.timeDate}</span>
          <p>{data.content}</p>
          by{' '}
          <UserMini
            data={{
              name: data.name,
              pfp: 'sdsad',
              faction: 'loner',
            }}
          />
        </Link>
        <ContentModifier data={{ id: data.id, isPost: true }} />
    </>
  )
}
