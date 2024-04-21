import React from 'react'
import ButtonPay from '../../elements/ButtonPay'
import '../../index.css'

const Price = () => {
  return (
    <div className='container mx-auto px-[25px]'>
        <div className='category shadow-lg px-[20px] pt-[20px] border rounded-[24px] border-border pb-[36px] mt-[36px] lg:px-[48px]'>
            <p className='text-[18px] leading-[24px] lg:text-[24px] lg:text-left font-bold font-jakarta text-globalGreen text-center pb-[24px]'>Price</p>
            <p className='text-[36px] leading-[36px] lg:text-left mt-[50ppx] mb-[48px] font-bold font-jakartas text-center'>USD 250</p>
            <div className='flex justify-center items-center text-center mb-[14px] text-input'>
                <form action="" className='flex items-center'>
                    <input 
                    type="checkbox"
                    className="checkbox rounded-[6px] border-input lg:w-[20px]"
                    />
                </form>
                <p className='text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px]'>Saya menyetujui Syarat dan Ketentuan dan Kebijakan Privasi yang berlaku</p>
            </div>
            <div className='flex justify-center items-center'>
                <ButtonPay 
                customButton="w-full lg:text-[24px] lg:leading-[24px]"
                />
            </div>
        </div>
    </div>
  )
}

export default Price