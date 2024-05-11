import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechEd - Week 08 Project',
  description: 'Please love me, SEO algorithm.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/posts'>Posts</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>ORFAN WAS ERE</footer>
      </body>
    </html>
  )
}
