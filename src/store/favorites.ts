import { create } from "zustand";

interface FavoritesDataType {
  desc: string;
  price: number;
  id: number;
}

interface FavoriteStore {
  favorites: FavoritesDataType[];
  addToFavorites: (data: FavoritesDataType) => void;
  removeFromFavorites: (id: number) => void;
}

const useFavoritesStore = create<FavoriteStore>()((set) => ({
  favorites: [],
  addToFavorites: (data) =>
    set((state: any) => {
      let favorites = [...state.favorites];
      if (favorites.find((item) => item.id === data.id)) {
        return { favorites };
      } else {
        return { favorites: [...state.favorites, { ...data }] };
      }
    }),
  removeFromFavorites: (id) =>
    set((state: any) => {
      let updatedArray = [...state.favorites];
      updatedArray = updatedArray.filter((item) => item.id !== id);
      return { favorites: [...updatedArray] };
    }),
}));

export default useFavoritesStore;
