import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks";

export default function WeatherContextProvider({ children }) {
    const { weatherData, error, loading } = useWeather();

    return (
        <WeatherContext.Provider value={{ weatherData, error, loading }}>
            {children}
        </WeatherContext.Provider>
    )
}
