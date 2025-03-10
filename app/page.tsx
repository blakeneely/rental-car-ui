import Image from 'next/image'
import styles from './page.module.css'
import { CarCard, Filter, Hero, Searchbar } from '@/components'
import { fetchData } from '@/utils'

export default async function Home() {
  const allCars = await fetchData()

  const isDataEmpty = !Array.isArray(allCars) || allCars?.length < 1 || !allCars

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

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
