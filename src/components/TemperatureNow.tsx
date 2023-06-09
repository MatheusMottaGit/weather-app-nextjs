import React from 'react'

import Location from './Location'
import CloudyIcon from './icons/CloudyIcon'

const TemperatureNow = () => {
  return (
    <div className='relative text-white h-[480px] w-[480px] rounded-lg bg-clouds bg-center bg-cover flex items-center justify-between'>
     <div className='absolute -top-16 -left-12'>
      <CloudyIcon />
     </div>

     <Location />
    </div>
  )
}

export default TemperatureNow