import { useEffect, useState } from "react";
import getTime from "../utils/getTime";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        description: "",
        feels_like: "",
        icon: "",
        humidity: "",
        wind: "",
        cloudPercentage: "",
        time: "",
        longitude: "",
        latitude: "",
        sunrise: "",
        sunset: "",
        error: "",
    });

    // loading state
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    // error
    const [error, setError] = useState(null);

    // fetch weather data
    const featchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Loading weather data...",
            });

            // console.log('ll->', import.meta.env.kkp);

            // todo : fetch weather data from API
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ccf015b8150160e2c825a4dbc491dc9d&units=metric`);

            if (!response.ok) {
                const errorMessage = `Fetching Weather Data Failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                weather: data?.weather[0]?.main,
                feelsLike: data?.main?.feels_like,
                temperature: data?.main?.temp,
                tempMax: data?.main?.temp_max,
                tempMin: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                wind: data?.wind?.speed,
                clouds: data?.clouds?.all,
                sunrise: getTime(data?.sys?.sunrise),
                sunset: getTime(data?.sys?.sunset),
                description: data?.weather[0]?.description,
                icon: data?.weather[0]?.icon,
                name: data?.name,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };

            setWeatherData(updateWeatherData);

        } catch (error) {
            setError(error);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Getting your location Data...",
        });

        navigator.geolocation.getCurrentPosition(function (position) {
            featchWeatherData(position.coords.latitude, position.coords.longitude);
        })
    }, []);

    return {
        weatherData,
        loading,
        error,
    };

}

export default useWeather;