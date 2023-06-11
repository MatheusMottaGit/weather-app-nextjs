import React from "react";

export interface Children {
  children: React.ReactNode
}

export interface WeatherContext {
  coords: {
    longitude: number | null
    latitude: number
  }
}

export interface Location {
  name: string
  sys: {
    country: string
  }
}