import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import NavDropdown from './components/navbar/NavDropdown'
import SideMenu from './components/navbar/sideMenu'


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
        <NavDropdown/>
        <SideMenu/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
