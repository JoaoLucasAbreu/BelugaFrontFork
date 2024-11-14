import { Inter } from 'next/font/google'
import './ui/globals.css'
import './globals.css'
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "@/components/ui/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beluga Front-end',
  description: 'Beluga Front-end',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
