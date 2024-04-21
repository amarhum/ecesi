import React from 'react'
import location from '../../assets/iconLocation.svg'
import { useState } from 'react'
import { useEffect } from 'react'


const CountDown = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "June, 21, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
        <div className='w-full bg-globalGreen'>
            <div className='container mx-auto block lg:flex justify-center items-center lg:py-[48.5px]'>
                <figure className='flex justify-center items-center gap-[12.14px] lg:pr-[81px] lg:border-r-2 border-white mr-[81px]'>
                    <img className='w-[19px] lg:w-[64.5px]' src={location} alt="icon-lokasi" />
                    <figcaption className='text-white text-[12px] leading-[12px] font-medium font-jakarta pt-[14px]'>
                        <p className='bkock lg:hidden'>jakarta, Indonesia <br/>21 October 2024</p>
                        <div className='hidden lg:block h-[99px] font-medium font-jakarta'>
                            <p className='text-[20px] leading-[20px]'>jakarta,Indonesia</p>
                            <div className='flex mt-[11px]'>
                                <p className='lg:text-[72px] lg:font-bold mt-[25px]'>21</p>
                                <p className='text-[30px] leading-[30px] flex flex-col w-[131px]'>June 2024</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
                <div className='flex gap-4 justify-center items-center py-[14px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[24px] leading-[31.65px] font-bold text-white lg:text-[60px] lg:leading-[79.13px]'>{days}</p>
                        <p className='text-[12px] leading-[15.83px] text-white lg:text-[24px] lg:leading-[31.65px]'>days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[24px] leading-[31.65px] font-bold text-white lg:text-[60px] lg:leading-[79.13px]'>{hours}</p>
                        <p className='text-[12px] leading-[15.83px] text-white lg:text-[24px] lg:leading-[31.65px]'>hours</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[24px] leading-[31.65px] font-bold text-white lg:text-[60px] lg:leading-[79.13px]'>{minutes}</p>
                        <p className='text-[12px] leading-[15.83px] text-white lg:text-[24px] lg:leading-[31.65px]'>minutes</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[24px] leading-[31.65px] font-bold text-white lg:text-[60px] lg:leading-[79.13px]'>{seconds}</p>
                        <p className='text-[12px] leading-[15.83px] text-white lg:text-[24px] lg:leading-[31.65px]'>seconds</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CountDown