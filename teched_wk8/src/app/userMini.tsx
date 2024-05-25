import Image from 'next/image'

export default function UserMini ({
  data
}: {
  data: { name: string; pfp: string; faction: string; location: string }
}) {
  return (
    <>
      <div className="pb-1">
        <Image
          src='/pfp/tim.jpg'
          alt=''
          width='50'
          height='50'
          className='rounded-full'
        />
        <Image
          src='/factions/loners.webp'
          alt=''
          width='25'
          height='25'
          className='absolute -mt-5'
        />
        <span className="absolute -mt-4 left-6 text-white drop drop-shadow">{data.name}</span>
      </div>
    </>
  )
}
