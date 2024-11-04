import React from 'react'

function Spinner() {
  return (
    <div className=' bg-[#783f3f] min-h-screen w-screen flex justify-center items-center rounded-lg'>
        <div className='loader'>
          <span></span>
        </div>
    </div>
  )
}

export default Spinner
