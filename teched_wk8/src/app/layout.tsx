import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'

import Link from 'next/link'
import Header from '@/app/header'
import Footer from '@/app/footer'
import './globals.css'
import { auth, currentUser } from '@clerk/nextjs/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zone PDA Network',
  description:
    'A student blog/forum project themed within GSC Game Worlds S.T.A.L.K.E.R universe.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  /*
  const { userId } = auth()
console.log(userId);

if (userId)
  {
    const thisUser = await currentUser();
    console.log("User is logged in");
  }
  */
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className='bg-skadovsk bg-cover bg-center h-screen'>
            <div className='bg-white/5 h-screen backdrop-blur-sm'>
              <Header />
              <main className='fixed bg-pda bg-top bg-contain bg-no-repeat pt-16 pda'>
                <div className='fixed mx-20 object-contain h-min flex flex-col gap-2 align-items pda-margin bg-black overflow-y-scroll overflow-x-hidden'>
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
