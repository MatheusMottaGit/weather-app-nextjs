import { MapPin } from 'lucide-react'
import React from 'react'

const Location = () => {
  return (
    <span className='absolute top-6 right-0 mr-8 text-vodka text-xl flex items-center gap-2'>
      <MapPin />
      Rio do Sul, SC
    </span>
  )
}

export default Location