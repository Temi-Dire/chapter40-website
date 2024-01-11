import { create } from "zustand";

interface BasketDataType {
  desc: string;
  price: number;
  id: number;
  quantity: number;
}

interface AddToBasketDataType {
  desc: string;
  price: number;
  id: number;
  quantity?: number;
}

interface User {
  username?: string;
  email?: string;
}

//add a property, (a boolean value), that stores either

interface FavoritesDataType {
  desc: string;
  price: number;
  id: number;
}

interface BasketStore {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
  basket: BasketDataType[];
  favorites: FavoritesDataType[];
  init: () => void;
  addToBasket: (data: AddToBasketDataType) => void;
  decrement: (id: number) => void;
  increment: (id: number) => void;
  removeFromBasket: (id: number) => void;
  addToFavorites: (data: FavoritesDataType) => void;
  removeFromFavorites: (id: number) => void;
}

const useStore = create<BasketStore>()((set, get) => ({
  user: null,
  addUser: (user) => {
    {
      set(() => {
        return { user: user };
      });
    }
    localStorage.setItem("user", JSON.stringify(get().user));
  },
  removeUser: () => {
    {
      set(() => {
        return { user: null };
      });
      localStorage.removeItem("user");
    }
  },
  basket: [],
  favorites: [],
  init: () => {
    const storedBasket = localStorage.getItem("basket");
    const storedUser = localStorage.getItem("user");
    if (storedBasket) {
      set(() => {
        return { basket: JSON.parse(storedBasket) };
      });
    }
    if (storedUser) {
      set(() => {
        return { user: JSON.parse(storedUser) };
      });
    }
  },
  addToBasket: (data) => {
    set((state: any) => {
      const existedProductIndex = state.basket.findIndex(
        (item: { id: number }) => item.id === data.id
      );
      if (existedProductIndex !== -1) {
        let updatedBasket = [...state.basket];
        updatedBasket[existedProductIndex].quantity++;
        return { basket: [...updatedBasket] };
      } else {
        return { basket: [...state.basket, { ...data, quantity: 1 }] };
      }
    });
    localStorage.setItem("basket", JSON.stringify(get().basket));
  },
  decrement: (id) => {
    set((state: any) => {
      const selectedProduct = state.basket.findIndex(
        (item: { id: number }) => item.id === id
      );
      //create an if statement, so that the quantity of the product doesn't go beyond 1
      if (state.basket[selectedProduct].quantity === 1) {
        return { basket: [...state.basket] };
      }
      const updatedBasket = [...state.basket];
      updatedBasket[selectedProduct].quantity -= 1;
      return { basket: [...updatedBasket] };
    });
    localStorage.setItem("basket", JSON.stringify(get().basket));
  },
  increment: (id) => {
    set((state: any) => {
      const selectedProduct = state.basket.findIndex(
        (item: { id: number }) => item.id === id
      );
      const updatedBasket = [...state.basket];
      updatedBasket[selectedProduct].quantity += 1;
      return { basket: [...updatedBasket] };
    });
    localStorage.setItem("basket", JSON.stringify(get().basket));
  },
  removeFromBasket: (id) => {
    set((state: any) => {
      const selectedProduct = state.basket.findIndex(
        (item: { id: number }) => item.id === id
      );
      const updatedBasket = [...state.basket];
      updatedBasket.splice(selectedProduct, 1);
      return { basket: [...updatedBasket] };
    });

    localStorage.setItem("basket", JSON.stringify(get().basket));
  },
  addToFavorites: (data) =>
    set((state: any) => {
      return { favorites: [...state.favorites, { ...data }] };
    }),
  removeFromFavorites: (id) =>
    set((state: any) => {
      const existedProductIndex = state.basket.findIndex(
        (item: { id: number }) => item.id === id
      );
      const updatedBasket = [...state.favorites];
      updatedBasket.splice(existedProductIndex, 1);
      return { favorites: [...updatedBasket] };
    }),
}));

useStore.getState().init();

export default useStore;
