import './ui/globals.css'
import './globals.css'

import { Inter } from 'next/font/google'

import { Providers } from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beluga Front-end',
  description: 'Beluga Front-end',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
