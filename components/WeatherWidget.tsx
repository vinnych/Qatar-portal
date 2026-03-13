import { getDohaWeather } from "@/lib/weather";

export default async function WeatherWidget() {
  const weather = await getDohaWeather();

  if (!weather) {
    return (
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-center justify-center text-sm text-gray-400">
        Weather unavailable
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
          Doha, Qatar
        </span>
        <span className="text-xs text-gray-400">Live</span>
      </div>

      {/* Main temp + icon */}
      <div className="flex items-center gap-4">
        <span className="text-5xl">{weather.icon}</span>
        <div>
          <div className="text-4xl font-bold text-gray-900 leading-none">
            {weather.temperature}°C
          </div>
          <div className="text-sm text-gray-500 mt-1">{weather.condition}</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1 bg-white/70 border border-amber-100 rounded-full px-3 py-1 text-xs text-gray-600">
          <span>🌡️</span> Feels {weather.feelsLike}°C
        </span>
        <span className="inline-flex items-center gap-1 bg-white/70 border border-amber-100 rounded-full px-3 py-1 text-xs text-gray-600">
          <span>💧</span> {weather.humidity}%
        </span>
        <span className="inline-flex items-center gap-1 bg-white/70 border border-amber-100 rounded-full px-3 py-1 text-xs text-gray-600">
          <span>💨</span> {weather.windSpeed} km/h
        </span>
      </div>
    </div>
  );
}
