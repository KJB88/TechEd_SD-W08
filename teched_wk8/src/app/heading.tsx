'use client'

import Link from 'next/link'
import * as Tooltip from '@radix-ui/react-tooltip'
import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'

export default function Heading ({ data }: { data: { name: string } }) {
  return (
    <Tooltip.Provider>
      <div>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className='drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle'>
              Your Profile
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
      <ul className='flex flex-col-nowrap text-xl justify-center border-b-white border-b-2 gap-2 -mt-8'>
      <Tooltip.Root>
          <Tooltip.Trigger>
            <li className="'drop-shadow bg-black bg-opacity-40 rounded-2xl text-center align-middle">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className='drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle'>
              Sign in with your Account
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <li>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className='drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle'>
              Return to Homepage
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <li>
              <Link href='/posts' className='hover:underline'>
                Posts
              </Link>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className='drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle'>
              See All Posts
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <li>
              <Link href='/users' className='hover:underline'>
                Users
              </Link>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className='drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle'>
              See All Users
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <li>
              <Link href='/tags' className='hover:underline'>
                Tags
              </Link>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className='drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle'>
              View Posts by Tag
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </ul>
      <h1 className='drop-shadow heading'>{data.name}</h1>
    </Tooltip.Provider>
  )
}
