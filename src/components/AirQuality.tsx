import { Leaf } from 'lucide-react'
import React from 'react'

const AirQuality = () => {
  return (
    <div className='bg-state rounded-lg w-[277px] h-[244px] flex flex-col items-center p-4 text-white'>
      <h1 className='flex items-center gap-2 font-bold'>
        {/* <Leaf size={15} /> */}
        Qualidade do Ar
      </h1>
    </div>
  )
}

export default AirQuality