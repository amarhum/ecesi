import React from 'react'
import logoFooter from '../../assets/logoFooter.png'
import telpon from '../../assets/telpon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='w-full bg-globalGreen mt-[56px]'>
        <div className='container lg:flex lg:justify-between mx-auto px-[35px] pt-[40px] pb-[112px]'>
            <figure className='flex justify-center items-center'>
                <img src={logoFooter} alt="" />
            </figure>
            <div className='flex flex-col justify-center items-center
                text-center lg:text-left mt-[32px] text-white lg:w-[232px]'>
                <p className='text-[16px] leading-[30px] font-jakarta font-bold lg:text-left lg:text-[20px] lg:leading-[30px] w-full'>About</p>
                <Link to='/about'>
                    <p className='mt-[20px] text-[12px] leading-[14.4px] lg:text-[14px] lg:leading-[16.8px] font-semibold font-jakarta'>The Eastasouth Conference on Environmental and Sustainability Issues is an international conference organized by the Eastasouth Institute. The event serves as a platform for experts, academics, researchers, and practitioners in the field of envir...</p>
                </Link>
            </div>
            <div className='text-white mt-[32px] flex flex-col justify-center items-center text-center'>
                <p className='text-[16px] leading-[30px] font-bold font-jakarta'>More Information</p>
                <div className='flex text-center gap-[12px] mt-[10px]'>
                    <img src={telpon} alt="" />
                    <div className='text-[14px] leading-[19.6px] font-bold font-poppins'>
                        <p className='text-left'>Maresta:</p>
                        <p>0821 2121 4028</p>
                    </div>
                </div>
            </div>
        </div>      
    </footer>
    </>
  )
}

export default Footer