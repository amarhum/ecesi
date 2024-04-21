import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import CountDown from '../components/home/CountDown'
import SubmitPaper from '../components/home/SubmitPaper'
import ImportantDate from '../components/home/ImportantDate'
import Registration from '../components/home/Registration'
import Speaker from '../components/home/Speaker'
import Map from '../components/home/Map'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <CountDown/>
        <SubmitPaper/>
        <ImportantDate/>
        <Registration/>
        <Speaker/>
        <Map/>
        <Footer/>
    </>
  )
}

export default Home