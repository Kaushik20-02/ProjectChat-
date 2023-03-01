'use client'
import axios from "axios"
import { useState } from "react"

const Appp=()=> {
    const [prompt, setPrompt]= useState('')
    const [response, setResponse]= useState(null)

    

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 
      items-center justify-center">
        
      {response &&(
        <div className="flex items-center justify-center gap-4
        w-full h-full px-8 py-8 bg-slate-200 dark:bg-slate-500 rounded-[2rem] shadow-lg ">
        <p className="w-full h-full 
        font-bold text-xl animate-pulse">{response}</p>
        </div>
      )} 

        <div className=" flex items-center 
        justify-center gap-5 w-full px-8 py-8 bg-slate-200 dark:bg-slate-500
        rounded-[2rem] shadow-lg md:px-24 md:py-10">
          {/*the input value onChange ll update the state 
            nd pass to prompt updated 1 */}
            <input type='text' placeholder='Ask anything to AI--'
            onChange={(e)=>setPrompt(e.target.value)}
            value={prompt} className='w-full h-full bg-transparent
            hover:bg-slate-300
            dark:text-white outline-none border-none
            transition duration-300 ease-in-out
             text-lg shadow-lg dark:hover:bg-slate-600
              rounded-[2rem] px-5 py-4 md:px-24'/>

            <button onClick={handleClick} 
            className='bg-green-400 rounded-[1rem] p-3
            font-bold shadow-sm text-gray-700 outline-none
             hover:bg-green-500 transition px-5 py-1
              duration-300 ease-in-out md:px-10 md:py-3'>Ask chatGPT</button>
        </div>
     
      </div>
    </div>
  )
}

export default Appp
