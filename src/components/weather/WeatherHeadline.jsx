import { useContext } from "react"
import cloudIcon from "../../assets/icons/cloud.svg"
import humidityIcon from "../../assets/icons/humidity.svg"
import tempMaxIcon from "../../assets/icons/temp-max.svg"
import tempMinIcon from "../../assets/icons/temp-min.svg"
import windIcon from "../../assets/icons/wind.svg"
import WeatherContext from '../../contexts/weatherContext'

export default function WeatherHeadline() {
    const { weatherData } = useContext(WeatherContext);
    const { tempMax, tempMin, humidity, clouds, wind } = weatherData;
    return (
        <>
            <div>
                <p className="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with light drizzle</p>
                <ul className="space-y-6 lg:space-y-6">
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Temp max</span>
                        <div className="inline-flex space-x-4">
                            <p>{tempMax}°</p>
                            <img src={tempMaxIcon} alt="temp-max" />
                        </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Temp min</span>
                        <div className="inline-flex space-x-4">
                            <p>{tempMin}°</p>
                            <img src={tempMinIcon} alt="temp-min" />
                        </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Humadity</span>
                        <div className="inline-flex space-x-4">
                            <p>{humidity}%</p>
                            <img src={humidityIcon} alt="humidity" />
                        </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Cloudy</span>
                        <div className="inline-flex space-x-4">
                            <p>{clouds}%</p>
                            <img src={cloudIcon} alt="cloudy" />
                        </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Wind</span>
                        <div className="inline-flex space-x-4">
                            <p>{wind}km/h</p>
                            <img src={windIcon} alt="wind" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
