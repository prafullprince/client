import React from 'react'


function IconBtn({text,children}) {

  return (
    <div className='px-5 py-2 flex gap-2 text-lg font-medium bg-[#FFD60A] text-[#000814] rounded-lg items-center'>
        {children}
        <p>{text}</p>
    </div>
  )
}

export default IconBtn
