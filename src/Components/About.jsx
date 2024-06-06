import React from 'react'
import about1 from "../assets/About1.png"

function About() {
    return (
        <>
            <div className="w-full h-[560px] border border-orange-500 flex">
                <div className='w-[50%] border  border-orange-950 '>
                    <div className='border border-emerald-600 flex items-center'>
                        <div className='free w-11 h-0.5 ml-[60px] bg-[#00D285]'></div>
                        <p className='free w-[68%] font-medium text-lg text-start ml-2'>OUR VALUE</p>
                    </div>
                    <p className='w-full h-5 leading-7 text-start font-medium text-4xl'>A melting pot for the best idea</p>  
                </div>


                <div className=''>
                    <img src={about1} alt="" />
                </div>
            </div>
        </>
    )
}

export default About