import React, { useContext } from 'react'

import { MapPin } from 'lucide-react'

const Location = async () => {

  return (
    <span className='absolute top-6 right-0 mr-8 text-vodka text-xl flex items-center gap-2'>
      <MapPin />
      
    </span>
  )
}

export default Location