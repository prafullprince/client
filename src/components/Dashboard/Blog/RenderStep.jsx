import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux'

function RenderStep({ste}) {

    const { step } = useSelector((state)=>state.blog);


  return (
    <div className={`flex flex-col items-center gap-2`}>
        {/* top */}
        <div className={`relative z-50`}>
            <div className={`w-10 h-10 ${ste.id < step ? " bg-yellow-50 text-richblack-900" : "" } border text-lg ${step === ste.id ? "text-[#FFD60A] border-[#FFD60A] bg-[#251400] font-semibold" : "text-richblack-200 border-[#2C333F] bg-[#161D29]"} rounded-full flex justify-center items-center`}>
                {ste.id < step ? (<FaCheck />) : (ste.id)}
            </div>
            <div className={` ${ste.id === 1 ? "absolute w-[710%] border border-dashed border-richblack-400 right-0 top-[50%] translate-x-[100%]" : "" } ${ste.id === 2 ? "absolute w-[620%] border border-dashed right-0 border-richblack-400 top-[50%] translate-x-[100%]" : "" }`}>

            </div>
        </div>
        {/* bottom */}
        <div className={`text-sm w-[50%] md:w-[100%] ${ste.id === step ? "text-richblack-25" : "text-[#585D69]"}`}>{ste.title}</div>
    </div>
  )
}

export default RenderStep
