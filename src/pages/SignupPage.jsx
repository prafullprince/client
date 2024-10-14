import React from 'react'
import SignupForm from '../components/auth/SignupForm'
import { BackgroundGradient } from '../components/ui/background-gradient'

function SignupPage() {



  return (
    <div className='flex bg-richblack-700'>
        {/* content */}
        <div className='w-[11/12] mx-auto flex justify-center items-center min-h-screen'>
            <BackgroundGradient>
              <SignupForm />
            </BackgroundGradient>
        </div>
    </div>
  )
}

export default SignupPage
