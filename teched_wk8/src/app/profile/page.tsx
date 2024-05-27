import { SignedIn, SignedOut } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import Heading from '../heading'
export default async function Profile () {
  const { userId } = auth()

  if (userId) {
    console.log(userId)
  }

  const user = await currentUser()

  return (
    <>
    <Heading data={{name: "User Profile"}} />
      <SignedIn>
        <p>{user?.firstName}</p>
        <p>{user?.firstName}</p>
        <p>{user?.firstName}</p>
        <p>{user?.firstName}</p>
        <p>{user?.firstName}</p>
        <p>{user?.firstName}</p>
      </SignedIn>
      <SignedOut>
        <p>You must be logged in to view this content.</p>
        <p>
          <Link href='/signin'>Please sign in here.</Link>
          <Link href='/signup'> Or sign up here.</Link>
        </p>
      </SignedOut>
    </>
  )
}
