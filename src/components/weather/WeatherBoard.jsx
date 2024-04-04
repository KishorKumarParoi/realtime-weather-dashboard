import { useContext } from 'react';
import WeatherContext from '../../contexts/weatherContext';
import AddToFavorite from './AddToFavorite';
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from './WeatherHeadline';

export default function WeatherBoard() {
    const { loading } = useContext(WeatherContext);

    return (
        <>
            <main>
                {/* <!-- Begin Weather --> */}
                <section className="">
                    <div className="container">
                        <div
                            className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                                {loading.state ?
                                    <div className="flex justify-center items-center">
                                        <p className="text-2xl lg:text-4xl text-white">{loading.message}</p>
                                    </div>
                                    :
                                    <>
                                        <AddToFavorite />
                                        <WeatherHeadline />
                                        <WeatherCondition />
                                    </>
                                }
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Wheather --> */}

            </main>
        </>
    )
}