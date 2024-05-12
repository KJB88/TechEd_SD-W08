import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/header'
import Footer from '@/app/footer'

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
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='bg-skadovsk bg-cover bg-center h-screen'>
          <div className='bg-white/5 h-screen backdrop-blur-sm'>
            <Header />
            <main className="w-full h-3/4 bg-pda bg-top bg-contain bg-no-repeat pt-16 pda">
              <div className="mx-20 w- h-min flex flex-col gap-2 align-items pda-margin bg-black overflow-y-scroll">
              {children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
