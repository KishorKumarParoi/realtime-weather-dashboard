import { useEffect, useState } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        wind: "",
        cloudPercentage: "",
        time: "",
        longitude: "",
        latitude: "",
        sunrise: "",
        sunset: "",
        icon: "",
        description: "",
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

            // todo : fetch weather data from API
            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=ccf015b8150160e2c825a4dbc491dc9d&units=metric`);
            if (!response.ok) {
                const errorMessage = `Fetching Weather Data Failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                weather: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                wind: data?.wind?.speed,
                cloudPercentage: data?.clouds?.all,
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
            message: "Getting your location...",
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