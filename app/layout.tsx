import './globals.css'
import { Inter, Mulish, Raleway, Oswald, Rubik } from 'next/font/google'
import clsx from 'clsx'

// const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const mulish = Mulish({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'An Era',
  description: 'An Era app about the covid pandemic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={oswald.className}>{children}</body> */}
      <body className={clsx([rubik.className, raleway.className, oswald.className, mulish.className])}>{children}</body>
    </html>
  )
}
