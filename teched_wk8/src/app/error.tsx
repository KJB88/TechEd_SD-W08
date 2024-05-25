'use client'

import Heading from './heading'
import Link from 'next/link'

export default function GlobalError ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <Heading
        data={{ name: 'The Zone bars your path with an unknown error!' }}
      />
      <Link href='/' className='text-center hover:underline'>
        Click here to return to the Homepage.
      </Link>
      <p className='text-center'>{error.message}</p>
    </>
  )
}
