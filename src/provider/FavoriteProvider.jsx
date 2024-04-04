import { FavoriteContext } from '../contexts';
import { useLocalStorage } from '../hooks';

export default function FavoriteContextProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const addToFavorites = (latitude, longitude, location) => {
        // console.log('addToFavorites', latitude, longitude, location);
        setFavorites(
            [
                ...favorites,
                { latitude, longitude, location },
            ]
        );
    };

    const removeFromFavorites = (location) => {
        const restFavorites = favorites.filter(favorite => favorite.location !== location);
        setFavorites(restFavorites);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    )
}
