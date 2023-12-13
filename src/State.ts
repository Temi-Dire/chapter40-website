import { create } from "zustand";

interface DataType {
  desc: string;
  price: number;
}

interface BasketStore {
  basket: [
    {
      desc: string;
      price: number;
    }
  ];
  addToBasket: (data: DataType) => void;
}

const useStore = create<BasketStore>()((set: any) => ({
  basket: [{ desc: "", price: 0 }],
  addToBasket: (data) =>
    set((state: any) => ({ basket: [...state.basket, data] })),
}));

export default useStore;
