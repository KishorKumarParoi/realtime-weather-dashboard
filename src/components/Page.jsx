import bodyBg from '../assets/body-bg.png';
import Header from './header/Header';
import WeatherBoard from './weather/WeatherBoard';

export default function Page() {
    return (
        <div className={`bg-white font-[Roboto] text-light bg-[url(${bodyBg})] bg-no-repeat bg-cover h-screen grid place-items-center`} >
            <Header />
            <WeatherBoard />
        </div >
    )
}