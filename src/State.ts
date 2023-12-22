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

//add a property, (a boolean value), that stores either

interface FavoritesDataType {
  desc: string;
  price: number;
  id: number;
  isClicked: boolean;
}

interface BasketStore {
  basket: BasketDataType[];
  favorites: FavoritesDataType[];
  addToBasket: (data: AddToBasketDataType) => void;
  decrement: (id: number) => void;
  increment: (id: number) => void;
  removeFromBasket: (id: number) => void;
  addToFavorites: (data: FavoritesDataType) => void;
  removeFromFavorites: (id: number) => void;
}

const useStore = create<BasketStore>()((set: any) => ({
  basket: [],
  favorites: [],
  addToBasket: (data) =>
    set((state: any) => {
      const existedProductIndex = state.basket.findIndex(
        (item: { id: number }) => item.id === data.id
      );
      if (existedProductIndex !== -1) {
        let updatedBasket = [...state.basket];
        updatedBasket[existedProductIndex].quantity++;
        return { basket: [...updatedBasket] };
      }
      return { basket: [...state.basket, { ...data, quantity: 1 }] };
    }),
  decrement: (id) =>
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
    }),
  increment: (id) =>
    set((state: any) => {
      const selectedProduct = state.basket.findIndex(
        (item: { id: number }) => item.id === id
      );
      const updatedBasket = [...state.basket];
      updatedBasket[selectedProduct].quantity += 1;
      return { basket: [...updatedBasket] };
    }),
  removeFromBasket: (id) =>
    set((state: any) => {
      const selectedProduct = state.basket.findIndex(
        (item: { id: number }) => item.id === id
      );
      const updatedBasket = [...state.basket];
      updatedBasket.splice(selectedProduct, 1);
      return { basket: [...updatedBasket] };
    }),
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

export default useStore;
