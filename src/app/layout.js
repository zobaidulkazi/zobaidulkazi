import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import { NavbarComponent } from '@/components/nav/NavBer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zobaidul Kazi',
  description: 'Welcome to Zobaidul Kazi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <NavbarComponent />
        {children}
        <Footer />
        </body>
    </html>
  )
}
