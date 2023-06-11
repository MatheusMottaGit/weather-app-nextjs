'use client'
import { Children, WeatherContext } from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const WeatherContxt = createContext<WeatherContext>({} as WeatherContext)

export const WeatherProvider = ({ children }: Children) => {

  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived) 
  }, [])

  function handlePositionReceived({ coords }: GeolocationPosition){
    const { longitude, latitude } = coords

    setCoords({ latitude, longitude })
  }

  return (
    <WeatherContxt.Provider value={{ coords }}>
      {children}
    </WeatherContxt.Provider>
  )
}