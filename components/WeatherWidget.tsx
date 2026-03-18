import { getDohaWeather } from "@/lib/weather";

export default async function WeatherWidget() {
  const weather = await getDohaWeather();

  if (!weather) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center text-xs text-gray-400">
        Weather unavailable
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-3.5 flex items-center gap-4">
      <span className="text-4xl shrink-0">{weather.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900 leading-none">{weather.temperature}°C</span>
          <span className="text-xs text-gray-400">{weather.condition}</span>
        </div>
        <div className="flex gap-3 mt-2 text-[10px] text-gray-500">
          <span>Feels {weather.feelsLike}°C</span>
          <span>·</span>
          <span>{weather.humidity}% humidity</span>
          <span>·</span>
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
