import { Sun } from 'lucide-react'
import React from 'react'

const SunTime = () => {
  return (
    <div className='bg-state rounded-lg flex flex-col items-center gap-8 p-4 text-white'>
      <h1 className='flex items-center gap-2 font-bold'>
        {/* <Sun size={15} /> */}
        Horário do sol
      </h1>


    </div>
  )
}

export default SunTime