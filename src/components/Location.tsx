import React, { useContext } from 'react'

import axios from 'axios'

import { MapPin } from 'lucide-react'
// import { Location } from '@/types/types'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const Location = async () => {

  return (
    <span className='absolute top-6 right-0 mr-8 text-vodka text-xl flex items-center gap-2'>
      <MapPin />
      
    </span>
  )
}

export default Location