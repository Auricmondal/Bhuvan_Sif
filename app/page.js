import Image from 'next/image'
import Banner from './components/Banner'
import Latest from './components/Latest'
import AppCard from './components/AppCard'

export default function Home() {
  return (
    <div>
      <Latest/>
      <Banner/>
      <AppCard/>
    </div>
  )
}
