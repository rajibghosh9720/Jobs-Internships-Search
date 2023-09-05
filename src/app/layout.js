import  Navbar  from './pages/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entry level Jobs & Internships',
  description: 'Entry level Jobs and Internships',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <Navbar/>
             {children}
      </body>
    </html>
  )
}
