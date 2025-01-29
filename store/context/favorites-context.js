import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesId, setFavoritesId] = useState([]);
  const addFavorite = (id) => {
    setFavoritesId((prevFavoritesIds) => [...prevFavoritesIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesId((prevFavoritesIds) =>
      prevFavoritesIds.filter((fid) => fid !== id)
    );
  };

  const isFavorite = (id) => {
    return favoritesId.some((fid) => fid === id);
  };

  const context = {
    ids: favoritesId,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
