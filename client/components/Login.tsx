'use client'
import {signIn} from 'next-auth/react'
import Image from 'next/image'
import '../styles/globals.css'

const Login = () => {
  return (
    <div className=' bg-[#2faca6e8] h-screen flex
    flex-col items-center text-center justify-center'>

      <Image className='rounded-lg transition
        duration-300 ease-in-out' src="https://play-lh.googleusercontent.com/2QXCv40cUDNEeZqviEJGdITx6tVEYScVi4tFWaJY4ckLei2ggsIxVZPLqAj1IITIlZh9"
       width={300} height={300} alt='logo'/>

       <button onClick={()=> signIn('google')} 
       className='text-white font-bold 
       text-[5rem] animate-pulse'>Sign in</button>
    </div>
  )
}

export default Login
