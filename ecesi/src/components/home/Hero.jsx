import React from 'react'
import hero from '../../assets/hero.png'
import heroMobile from '../../assets/heroMobile.png'
import NavigationBar from '../../elements/NavigationBar'

const Hero = () => {
  return (
    <>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className='container mx-auto px-[96px]'>
                <NavigationBar/>
                <figure className='py-[128px] flex justify-center items-center'>
                    <img className='hidden lg:block' src={hero} alt="" />
                    <img className='lg:hidden block' src={heroMobile} alt="" />
                </figure>
            </div>
        </div>
    </>
  )
}

export default Hero