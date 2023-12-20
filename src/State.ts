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

interface BasketStore {
  basket: BasketDataType[];
  addToBasket: (data: AddToBasketDataType) => void;
}

const useStore = create<BasketStore>()((set: any) => ({
  basket: [],
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
}));

export default useStore;
