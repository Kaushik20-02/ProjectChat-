'use client'

import { useSession, signOut } from "next-auth/react"
import useTheme from '../components/useTheme'
import Image from "next/image";

const TopBar = () => {
  const {data: session }= useSession()
  
  //dark mode
  const[nextTheme,setTheme] = useTheme()

  return (
    <div className=' flex items-center justify-around gap-[2rem]'>
     
      <h1 className=' text-md dark:text-slate-400'>Welcome to
       <span className="font-bold text-3xl animate-pulse
       text-slate-600 dark:text-green-300"> chatGPT</span></h1>

    <div className="flex items-center justify-center gap-8 font-bold">
    {session && <Image onClick={()=> signOut()}
       src={session.user?.image!}
      alt='Profile' className="w-12 h-12 rounded-full
      m-2 hover:scale-90 cursor-pointer"/>}

   {/* <div className='dark:text-slate-200'
         onClick={()=> setTheme(nextTheme)}>
          <RiMoonFoggyLine className='cursor-pointer w-6 h-6'/></div>
 */} </div>
    </div>

  )
}

export default TopBar