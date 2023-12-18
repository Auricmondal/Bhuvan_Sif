import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhuvan_sif',
  description: 'This app is a revamp of bhuva.nrsc site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
