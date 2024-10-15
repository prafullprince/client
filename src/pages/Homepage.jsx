import React from 'react'
import { Spotlight } from '../components/ui/Spotlight'

function Homepage() {
  return (
    <div className='text-white relative min-h-screen'>
      <div className='w-[90%] mx-auto md:w-[80%]'>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
    </div>
  )
}

export default Homepage
