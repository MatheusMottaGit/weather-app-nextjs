import AirQuality from "@/components/AirQuality";
import SunTime from "@/components/SunTime";
import TemperatureNow from "@/components/TemperatureNow";
import WeekWeather from "@/components/WeekWeather";

export default function Home() {
  return (
    <main className="w-fit h-fit flex items-center gap-6">
      <TemperatureNow />

      <div className="grid grid-cols-2 gap-y-6 gap-x-6">
        <AirQuality />

        <SunTime />

        <WeekWeather />
      </div>
    </main>
  )
}
