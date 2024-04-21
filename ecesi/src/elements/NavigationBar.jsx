import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='pt-[21px]'>
        <ul className='lg:flex hidden justify-between text-globalGreen text-[18px] leading-[18.9px] font-semibold'>
            <li><a className=' ' href="/#submitPaper">call for paper</a></li>
            <li><a href="/#papersubmission">paper submission</a></li>
            <li><a href="/#importantdates ">important dates </a></li>
            <li><a href="/#registration">registration</a></li>
            <li><a href="/#speakers">speakers</a></li>
            <li><a href="/#comittees">comittees</a></li>
            <li><Link to='/about'>about </Link></li>
        </ul>
    </div>
  )
}

export default NavigationBar