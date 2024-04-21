import React from 'react'
import arrow from '../../assets/icon-arrow.svg'
import { useState } from 'react'

const Category = () => {

    const [first, setfirst] = useState(false)
    const [first2, setfirst2] = useState(false)
    const [first3, setfirst3] = useState(false)
    const click = ()=>{
        setfirst(!first)
    }
    const click2 = ()=>{
        setfirst2(!first2)
    }
    const click3 = ()=>{
        setfirst3(!first3)
    }

  return (
    <>
    <div className='container mx-auto px-[25px]'>
        <div className='category shadow-lg px-[20px] pt-[20px] border rounded-[24px] border-border pb-[36px] mt-[36px] lg:px-[48px]'>
            <p className='text-[18px] leading-[24px] font-bold lg:text-left font-jakarta text-globalGreen text-center pb-[24px] lg:text-[24px] lg:leading-[24px]'>Category</p>
            <div className='flex flex-col gap-[20px]'>
                <div>
                    <form action="" className='flex items-center border px-3 py-2 lg:px-[35px] rounded-[35px] border-input'>
                        <select onClick={click} name="profesion" id="" className=' appearance-none w-full outline-none text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-input'>
                            <option value="">Indonesia / International</option>
                            <option value="1">Indonesia</option>
                            <option value="2">Internation</option>
                        </select>
                        <img className={`w-[14.5px] lg:w-[20px] duration-500 ${first ? 'rotate-180':'rotate-0'}`} src={arrow} alt="arrrow" />
                    </form>
                </div>
                <div>
                <form action="" className='flex items-center border px-3 py-2 lg:px-[35px] rounded-[35px] border-input'>
                        <select onClick={click2} name="profesion" id="" className=' appearance-none w-full outline-none text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-input'>
                            <option value="">Presenter / Audience</option>
                            <option value="1">Presenter</option>
                            <option value="2">Audience</option>
                        </select>
                        <img className={`w-[14.5px] lg:w-[20px] duration-500 ${first2 ? 'rotate-180':'rotate-0'}`} src={arrow} alt="arrrow" />
                    </form>
                </div>
                <div><form action="" className='flex items-center border px-3 py-2 lg:px-[35px] rounded-[35px] border-input'>
                    <select onClick={click3} name="profesion" id="" className=' appearance-none w-full outline-none text-[12px] leading-[15.83px] lg:text-[18px] lg:leading-[24px] font-medium font-jakarta text-input'>
                            <option value="">Onsite / Online </option>
                            <option value="1">Onsite</option>
                            <option value="2">Online</option>
                        </select>
                        <img className={`w-[14.5px] lg:w-[20px] duration-500 ${first3 ? 'rotate-180':'rotate-0'}`} src={arrow} alt="arrrow" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category