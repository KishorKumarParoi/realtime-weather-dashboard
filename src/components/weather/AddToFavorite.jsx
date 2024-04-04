import { useContext, useEffect, useState } from 'react';
import redHeart from '../../assets/heart-red.svg';
import heart from '../../assets/heart.svg';
import { FavoriteContext, WeatherContext } from '../../contexts';

export default function AddToFavorite() {
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

    const [isFavorite, toggleFavorite] = useState(false);

    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;
    console.log(location, latitude, longitude);

    useEffect(() => {
        const found = favorites.find(favorite => favorite.location === location);
        toggleFavorite(found);
    }, []);

    const handleFavorites = () => {
        toggleFavorite(!isFavorite);
        const found = favorites.find(favorite => favorite.location === location);
        if (!found) {
            addToFavorites(latitude, longitude, location);
        } else {
            removeFromFavorites(location);
        }
        toggleFavorite(!isFavorite);
    }

    return (
        <>
            <div className="md:col-span-2">
                <div className="flex items-center justify-end space-x-6">
                    <button
                        className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                        <span onClick={() => handleFavorites()}>Add to Favourite</span>
                        <img src={isFavorite ? redHeart : heart} alt="" />
                    </button>

                </div>
            </div>
        </>
    )
}