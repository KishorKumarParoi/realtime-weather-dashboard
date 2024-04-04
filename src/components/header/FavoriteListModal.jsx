import { useContext } from "react";
import { FavoriteContext } from "../../contexts";

export default function FavoriteListModal() {
    const { favorites } = useContext(FavoriteContext);

    return (
        <>
            <div
                className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
                <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
                <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                    {
                        favorites.length > 0 ?
                            favorites.map((favorite, index) => (
                                <li key={index} className="hover:bg-gray-200">{favorite.location}</li>
                            )) :
                            <li className="hover:bg-gray-200">No Favourite Locations</li>
                    }
                </ul>
            </div>
        </>
    )
}