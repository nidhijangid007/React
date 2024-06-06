import React from 'react'
import profile from "../assets/Ellipse.png"
import profile2 from "../assets/Petrong2.png"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


function Home() {
  return (
    <>
      <div className='w-full py-11 bg-[#F2F4FA] flex'>
        <div className='w-4/12 '>
          <div className='flex items-center justify-between '>
            <div className='free w-11 h-0.5 ml-[60px] bg-[#00D285]'></div>
            <p className='free w-[68%] font-medium text-lg text-start'>TESTIMONIAL</p>
          </div>

          <p className=' font-[650] text-[#000D2F]'>See how are clients feel about us.</p>
        </div>

        <div className='w-[70%]  flex justify-between items-center relative '>
          <div className='w-[80%] ml-[42px] flex justify-center py-[20px]'>
            <div className='w-[80%] h-[200px] bg-[#E1E1E1] rounded-[5px] relative'>
              <div className='w-[100%] h-[200px]  absolute top-[-15%] left-[-5%] p-[10px] rounded-[5px] bg-[white]'>
                <div className='card_img_section'>
                  <img src={profile} alt="" className='profile_img w-[50px] h-[50px] rounded-full' />
                </div>

                <div className='text-start leading-[30px]' >
                  Working with the PETRONG team has been a huge success! They're
                  good people who care deeply about our business!
                </div>

                <div className=' mt-[20px] flex'>
                  <div className='w-[50%] '>
                    <div className=' text-start font-[550]'>John Doe</div>
                    <div className=' text-start font-[450]'>CEO</div>
                  </div>
                  <div className='w-[50%]  flex items-end justify-end font-[550]'>
                    Leonard Technologies
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[50px] h-[150px]  absolute top-[65px] right-[120px]'>
            <div className='w-[40px] h-[40px] border-2 border-[#00D285] rounded-[50%] relative' >
              <IoIosArrowUp className=' absolute right-[11px] top-[10px] text-[#00D285]' />
            </div>
            <div className='w-[40px] h-[40px] bg-[#000D2F] rounded-[50%] mt-4 relative'>
              <IoIosArrowDown className=' absolute right-[12px] top-[13px] text-[#00D285]' />
            </div>
          </div>
        </div>

      </div>

      <div className='w-full h-14 bg-[#F2F4FA]'>
        <div className=' flex items-center'>
          <div className='w-11 h-0.5 ml-[60px]  bg-[#00D285]'></div>
          <p className='text-start ml-2 font-medium text-lg '>ABOUT PACIOLI</p>
        </div>
      </div>

      <div className=' w-full h-[580px] flex'>
        <div className='w-1/2 bg-black relative'>
          <img src={profile2} className='m-auto absolute top-12 left-12' />
        </div>
        <div className='w-1/2  bg-[#EBFAF4]'>
          <h1 className='pl-16 mt-24 pb-6 text-4xl font-bold text-start '>Petrong & Pacioli</h1>
          <p className='w-[530px] h-60 font-medium text-sm leading-8 ml-16 text-start'>Pacioli is the flagship product at petrong software solutions, a tailored digital
            lending tools that helps microfinance institutions to efficiently and quickly
            onboard customers and to account reconciliation with financial inclution
            as the motivation.
            Pacioli improves female customers comfort with the service by specifically
            design for unique constraint.</p>
        </div>
      </div>
    </>
  )
}

export default Home