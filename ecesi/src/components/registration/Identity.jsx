import React, { useState } from 'react'
import person from '../../assets/icon-person.svg'
import phone from '../../assets/icon-phone.svg'
import gedung from '../../assets/icon-gedung.svg'
import globe from '../../assets/icon-globe.svg'
import email from '../../assets/icon-mail.svg'
import arrow from '../../assets/icon-arrow.svg'
import NavigationBar from '../../elements/NavigationBar'

const Identity = () => {

    const [first, setfirst] = useState(false)
    const click = ()=>{
        setfirst(!first)
    }

  return (
    <>
    <div className='lg:px-[96px]'>
    <NavigationBar/>
        <div className='container mx-auto mt-[36px] px-[25px] lg:px-[167px]'>
            <h1 className='text-[20px] lg:text-[36px] lg:leading-[43.2px] leading-[24px] font-extrabold font-jakarta text-center text-globalGreen '>REGISTRATION</h1>
            <div className='identity  shadow-lg px-[20px] pt-[20px] border rounded-[24px] border-border pb-[36px] mt-[36px] lg:px-[48px]'>
                <p className='text-[18px] leading-[24px] font-bold font-jakarta text-center text-globalGreen pb-[24px] lg:text-left lg:text-[24px] lg:leading-[24px]'>Identity</p>
                <div className='gap-[20px] lg:gap-[40px] flex flex-col'>
                    <form action="" className='flex items-center border px-3 lg:px-[48px] py-2 rounded-[35px] border-input'>
                        <input type="text"
                        placeholder='Name'
                        className='w-full bg-transparent p-2 text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-globalGreen outline-none'
                        />
                        <img className='w-[14.5px] lg:w-[20px]' src={person} alt="" />
                    </form>
                    <form action="" className='flex items-center border px-3 lg:px-[48px] py-2 rounded-[35px] border-input'>
                        <input type="text"
                        placeholder='Email'
                        className='w-full bg-transparent p-2 text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-globalGreen outline-none'
                        />
                        <img className='w-[14.5px] lg:w-[20px]' src={email} alt="" />
                    </form>
                    <form action="" className='flex items-center border px-3 lg:px-[48px] py-2 rounded-[35px] border-input'>
                        <input type="text"
                        placeholder='Phone'
                        className='w-full bg-transparent p-2 text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-globalGreen outline-none'
                        />
                        <img className='w-[14.5px] lg:w-[20px]' src={phone} alt="" />
                    </form>
                    <form action="" className='flex items-center border px-3 lg:px-[48px] py-2 rounded-[35px] border-input'>
                        <input type="text"
                        placeholder='Country'
                        className='w-full bg-transparent p-2 text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-globalGreen outline-none'
                        />
                        <img className='w-[14.5px] lg:w-[20px]' src={globe} alt="" />
                    </form>
                    <div action="" className='flex items-center border px-3 lg:px-[48px] py-2 rounded-[35px] border-input'>
                        <select onClick={click} name="profesion" id="" className=' appearance-none w-full outline-none text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-input'>
                            <option value="">Profesion</option>
                            <option value="1">Programer</option>
                            <option value="2">Bidan</option>
                            <option value="3">Dokter</option>
                            <option value="4">Polisi</option>
                        </select>
                        <img className={`w-[14.5px] lg:w-[20px] duration-500 ${first ? 'rotate-180':'rotate-0'}`} src={arrow} alt="arrrow" />
                    </div>
                    <form action="" className='flex items-center border px-3 lg:px-[48px] py-2 rounded-[35px] border-input'>
                        <input type="text"
                        placeholder='Institution'
                        className='w-full bg-transparent p-2 text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-globalGreen outline-none'
                        />
                        <img className='w-[14.5px] lg:w-[20px]' src={gedung} alt="" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Identity