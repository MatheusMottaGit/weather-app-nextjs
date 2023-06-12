import { Leaf } from 'lucide-react'
import React from 'react'

const AirQuality = () => {
  return (
    <div className='bg-state rounded-lg w-[277px] h-[244px] flex flex-col justify-between items-center p-6 text-palelavender'>
      <h1 className='flex items-center gap-2 font-bold'>
        {/* <Leaf size={15} /> */}
        Qualidade do Ar
      </h1>

      <div className='flex flex-col gap-2 items-center'>
        <span className='text-middlegreen text-xl'>
          Boa
        </span>

        <span className='text-white text-3xl font-bold'>
          21
        </span>
      </div>

      
    </div>
  )
}

export default AirQuality