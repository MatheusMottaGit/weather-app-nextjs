import React from 'react'

import Image from 'next/image'

import clouds from '../../assets/weather.svg'

const CloudyIcon = () => {
  return (
    <>
      <Image 
        src={clouds}
        alt=''
      />
    </>
  )
}

export default CloudyIcon