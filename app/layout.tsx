import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Header from '@/pages/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome zobaidulkazi',
  description: 'welcome my home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <Header />
        
        {children}
        <Analytics />
        
        </body>
    </html>
  )
}
