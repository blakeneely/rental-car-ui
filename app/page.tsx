import Image from 'next/image'
import styles from './page.module.css'
import { Filter, Hero, Searchbar } from '@/components'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 p-x p-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extra-bold'>Card Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <Searchbar />
          <div className='home__filter-container'>
            <Filter title='fuel' />
            <Filter title='year' />
          </div>
        </div>
      </div>
    </main>
  )
}
