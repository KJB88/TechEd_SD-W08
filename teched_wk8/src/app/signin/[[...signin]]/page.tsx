import Heading from '@/app/heading'
import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'
export default function LogInUser () {
  return (
    <>
      <Heading data={{ name: 'SignIn' }} />
      <div className="flex flex-col items-center justify-center align-middle">
      <Link href='/' >Click here to return to the Homepage.</Link>
      <SignIn
        appearance={{
          variables: {
            colorBackground: 'transparent',
            colorText: 'white',
            colorTextSecondary: 'white',
            colorInputBackground: 'white',
            colorTextOnPrimaryBackground: 'white',
            colorPrimary: 'white'
          },
          elements: {
            cardBox: "w-5/6 ml-7 mt-2 bg-white bg-opacity-55 rounded-xl",
            card: "text-white drop-shadow",
            footerAction: "bg-white bg-opacity-55 rounded-full",
            footerActionText: "drop-shadow",
            footerActionLink: "drop-shadow underline",
            button: "bg-white text-black rounded-full drop-shadow-none",
          }
        }}
        path='/signin'
      />
      </div>
    </>
  )
}
