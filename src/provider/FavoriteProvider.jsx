import { FavoriteContext } from '../contexts';
import { useLocalStorage } from '../hooks';

export default function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const addToFavorites = (latitude, longitude, location) => {
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
