import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../contexts';
import Header from './header/Header';
import WeatherBoard from './weather/WeatherBoard';

import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import ShowerRain from '../assets/backgrounds/shower-rain.jpg';
import SnowImage from "../assets/backgrounds/snow.jpg";
import SunnyImage from '../assets/backgrounds/sunny.jpg';
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";
import bgImage from '../assets/body-bg.png';

export default function Page() {
    const { loading, weatherData } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Drizzle":
                return ShowerRain;
            case "Sunny":
                return SunnyImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.weather);
        setClimateImage(bgImage);
    }, [weatherData.weather]);

    return (
        <div
            style={{ backgroundImage: `url('${climateImage}')` }}
            className={`bg-white font-[Roboto] text-light bg-[url(${bgImage})] bg-no-repeat bg-cover h-screen grid place-items-center`} >
            {
                loading.state ? <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
                    <div className="text-white text-2xl">{loading.message}</div>
                </div> :
                    <>
                        <Header />
                        <WeatherBoard />
                    </>
            }

        </div >
    )
}