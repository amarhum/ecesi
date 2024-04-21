import React from 'react'

const SubmitPaper = () => {
  return (
    <>
        <div className='w-full bg-white' id='submitPaper'>
            <div className='container mx-auto pb-[64px] lg:px-[120px] px-6'>
                <div className='flex flex-col justify-center items-center py-[56px] lg:gap-y-8'>
                    <h1 className='text-[18px] leading-[21.6px] lg:text-[36px] lg:leading-[43.2px]  font-bold font-jakarta text-globalGreen'>CALL FOR PAPER</h1>
                    <div className='border-2 border-border rounded-[16px] w-full px-[33px] lg:px-[200px] py-[28px] mt-[24px]'>
                        <ul className='flex flex-col justify-center items-center'>
                            <li><a className='hover:text-globalGreen text-[14px] duration-500 hover:lg:text-[25px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold ' href="#">Scientific Research</a></li>
                            <li><a className='hover:text-globalGreen text-[14px] duration-500 hover:lg:text-[25px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#"> Ecology and Natural Ecosystems</a></li>
                            <li><a className='hover:text-globalGreen text-[14px] duration-500 hover:lg:text-[25px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Sustainable Urban Planning</a></li>
                            <li><a className='hover:text-globalGreen text-[14px] duration-500 hover:lg:text-[25px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Energy Efficiency and Waste Reduction</a></li>
                            <li><a className='hover:text-globalGreen text-[14px] duration-500 hover:lg:text-[25px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Natural Resource Economics</a></li>
                            <li><a className='hover:text-globalGreen text-[14px] duration-500 hover:lg:text-[25px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Biodiversity Conservation</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center' id='papersubmission'>
                    <div className='lg:flex lg:gap-[40px] justify-center items-center font-jakarta'>
                        <div className=''>
                            <h1 className='text-[18px] leading-[21.6px] lg:text-[36px] lg:w-[498px] lg:leading-[43.2px]  font-bold font-jakarta text-globalGreen'>SUBMIT YOUR PAPER NOW!</h1>
                            <p className='text-[12px] leading-[14.4px] font-semibold mt-[2px] max-w-[241px] lg:max-w-[482px] lg:text-[20px] lg:leading-[24px] text-center'>Eastasouth Conference On Environmental and Sustainability Issues </p>
                        </div>
                        <button className='rounded-[12px] lg:rounded-[24px] mx-5 xl:text-[24px] xl:leading-[28.8px] lg:text-[24px] lg:w-[310px] xl:w-[390px] font-bold xl:py-[36px] xl:px-[39px] bg-globalGreen lg:py-[30px] px-2 py-2 text-white mt-3'>Submit your paper here !</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SubmitPaper