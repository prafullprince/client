import React from 'react'


function IconBtn({text,children,btnHandler}) {

  return (
    <button onClick={btnHandler} className='px-5 py-2 flex gap-2 text-lg font-medium bg-[#FFD60A] text-[#000814] rounded-lg items-center cursor-pointer'>
        {children}
        <p>{text}</p>
    </button>
  )
}

export default IconBtn
