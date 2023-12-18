import Image from 'next/image'
import Banner from './components/Banner'
import FeaturedCard from './components/FeaturedCard'

export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturedCard/>
    </div>
  )
}
