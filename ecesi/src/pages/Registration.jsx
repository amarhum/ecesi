import React from 'react'
import Footer from '../components/home/Footer'
import Identity from '../components/registration/Identity'
import Header from '../components/home/Header'
import Category from '../components/registration/Category'
import Price from '../components/registration/Price'

const Registration = () => {
  return (
    <>
        <Header/>
        <Identity/>
        <div className='lg:flex lg:px-[167px]'>
            <Category/>
            <Price/>
        </div>
        <Footer/>
    </>
  )
}

export default Registration