'use client'

import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-aut'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
          Find, book, or rent a car — quickly and easily.
        </h1>
        <p className='text-[27px] text-black-100 font-light mt-5'>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Button
          text='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
          <Image
            src={'/hero.png'}
            alt='hero car image'
            fill
            className='object-contain'
          />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero
