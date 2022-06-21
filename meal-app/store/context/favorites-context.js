import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavourites: (id) => {},
    removeFavourites: (id) => {}
})

function FavoritesContextProvider({children}){
    const [favoritesIds, setFavoritesIds] = useState([])

    function addFavourites(id){
        setFavoritesIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavourites(id){
        setFavoritesIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const value = {
        ids: favoritesIds,
        addFavourites: addFavourites,
        removeFavourites: removeFavourites
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;