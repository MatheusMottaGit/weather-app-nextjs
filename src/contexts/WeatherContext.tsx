import { Children } from "@/types/types";
import { createContext } from "react";

export const WeatherContxt = createContext({})

export const WeatherProvider = ({ children }: Children) => {
  return (
    <WeatherContxt.Provider value={{}}>
      {children}
    </WeatherContxt.Provider>
  )
}