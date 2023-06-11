'use client'
import React, { useContext } from 'react'

import Location from './Location'
import CloudyIcon from './icons/CloudyIcon'
import Statistics from './Statistics'
import CurrentWeather from './CurrentWeather'

const TemperatureNow = () => {

  return (
    <div className='relative text-white h-[480px] w-[480px] rounded-lg bg-clouds bg-center bg-cover flex flex-col items-center justify-end'>
     <div className='absolute -top-16 -left-12'>
      <CloudyIcon />
     </div>
  
     <Location />

     <div className='w-full h-2/3 flex flex-col items-center justify-between pb-4'>
      <CurrentWeather />

      <Statistics />
     </div>
    </div>
  )
}

export default TemperatureNow