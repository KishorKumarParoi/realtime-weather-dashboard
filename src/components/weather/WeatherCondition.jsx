import { useContext } from 'react';
import pinIcon from "../../assets/pin.svg";
import WeatherContext from '../../contexts/weatherContext';
import getAMPM from '../../utils/getAMPM';

export default function WeatherCondition() {
    const { weatherData } = useContext(WeatherContext);
    const { name } = weatherData;
    const time = getAMPM();

    return (
        <>
            <div>
                <div className="max-md:flex items-center justify-between md:-mt-10">
                    <img src="./assets/cloud.svg" alt="cloud" />
                    <div className="max-md:flex items-center max-md:space-x-4">
                        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">16°</h1>
                        <div className="flex items-center space-x-4 md:mb-4">
                            <img src={pinIcon} />
                            <h2 className="text-2xl lg:text-[50px]">{name}</h2>
                        </div>
                    </div>
                </div>
                <p className="text-sm lg:text-lg">{time}</p>
            </div>
        </>
    )
}
