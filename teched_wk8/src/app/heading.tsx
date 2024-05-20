'use client';

import Link from 'next/link'
import { redirect } from 'next/navigation'
import * as Tooltip from '@radix-ui/react-tooltip'
export default function Heading ({ data }: { data: { name: string } }) {
  return (
    <Tooltip.Provider>
      <ul className='flex flex-col-nowrap justify-center border-b-white border-b-2 gap-2'>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <li>
              <Link href='/'>Home</Link>
            </li>
            </Tooltip.Trigger>
            <Tooltip.Trigger asChild>
            <li>
              <Link href='/posts'>Posts</Link>
            </li>
            </Tooltip.Trigger>
            <Tooltip.Trigger asChild>
            <li>
              <Link href='/users'>Users</Link>
            </li>
            </Tooltip.Trigger>
            <Tooltip.Trigger asChild>
            <li>
              <Link href='/tags'>Tags</Link>
            </li>
            </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="drop-shadow bg-black bg-opacity-40 rounded-2xl py-1 px-2 text-center align-middle">
              TEST TOOLTIP
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </ul>
      <h1 className='drop-shadow heading'>{data.name}</h1>
    </Tooltip.Provider>
  )
}
