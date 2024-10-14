import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { BackgroundGradient } from '../components/ui/background-gradient'

function LoginPage() {
  return (
    <div className='flex bg-richblack-700'>
        {/* content */}
        <div className='w-[11/12] mx-auto flex justify-center items-center min-h-screen'>
            <BackgroundGradient>
              <LoginForm />
            </BackgroundGradient>
        </div>
    </div>
  )
}

export default LoginPage
