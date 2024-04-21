import React, { useState } from 'react'
import logo from '../../assets/logo_header.svg'
import menu from '../../assets/menuMobile.svg'
const Header = () => {
  
  const [side, setSide] = useState(false)
  const menuSide = ()=>{
    setSide(!side)
  }

  return (
    <>
        <div className='header w-full bg-globalGreen'>
            <div className='container mx-auto flex lg:justify-center justify-between px-[35px] items-center py-4'>
                <img src={logo} alt="logo" />
                <button onClick={menuSide}>
                  <img className='block lg:hidden' src={menu} alt="" />
                </button>
            </div>
            {
            side && 
            <div className='w-full flex justify-end'>
              <div className='sideBar absolute bg-white mr-[10px] mt-2 py-[18px] rounded-[8px] px-[20px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#submitPaper">call for paper</a></li>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#">paper submission</a></li>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#">important dates </a></li>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#">registration</a></li>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#">speakers</a></li>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#">comittees</a></li>
                <li><a className='border-b border-borderMobile w-full pb-[10px] items-center justify-center flex' href="#">about </a></li>
              </ul>
          </div>
            </div>
            }
        </div>
    </>
  )
}

export default Header