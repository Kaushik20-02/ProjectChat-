'use client'

import { useSession, signOut } from "next-auth/react"

const TopBar = () => {
  const {data: session }= useSession()

  return (
    <div className='flex items-center justify-around gap-[2rem]'>
      <h1 className='font-bold text-3xl text-violet-400'>Hey there :3</h1>

      {session && <img onClick={()=> signOut()}
       src={session.user?.image!}
      alt='Profile' className="w-12 h-12 rounded-full
      m-2 hover:scale-90 cursor-pointer"/>}
    
    </div>
  )
}

export default TopBar
