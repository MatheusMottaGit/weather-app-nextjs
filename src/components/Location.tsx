import React, { useContext } from 'react'

import axios from 'axios'

import { WeatherContxt } from '@/contexts/WeatherContext'
import { MapPin } from 'lucide-react'
import { Location } from '@/types/types'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const Location = async () => {

  const { coords } = useContext(WeatherContxt)

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`)

  const location: Location = await response.data

  return (
    <span className='absolute top-6 right-0 mr-8 text-vodka text-xl flex items-center gap-2'>
      <MapPin />
      {location.name}, {location.sys.country}
    </span>
  )
}

export default Location