import React from 'react'
import hero from '../../assets/hero.png'
import heroMobile from '../../assets/heroMobile.png'
import NavigationBar from '../../elements/NavigationBar'

const AboutHero = () => {
  return (
    <>
    <div className=' lg:bg-hero-pattern bg-none bg-cover bg-no-repeat bg-center'>
        <div className='container mx-auto px-[96px]'>
            <NavigationBar/>
            <p className='text-[20px] leading-[24px] font-extrabold font-jakarta text-globalGreen flex justify-center items-centers text-center mt-[36px] lg:text-[36px] lg:leading-[43.2px]'>ABOUT</p>
            <figure className='py-[128px] flex justify-center items-center'>
                <img className='hidden lg:block' src={hero} alt="" />
                <img className='lg:hidden block' src={heroMobile} alt="" />
            </figure>
        </div>
      </div>
    </>
  )
}

export default AboutHero