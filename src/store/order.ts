import { create } from "zustand";

interface OrderDataType {
  desc: string;
  price: number;
  id: number;
  quantity: number;
}

interface OrderStore {
  orders: OrderDataType[];
  addToOrders: (data: OrderDataType) => void;
}

const storedOrders = localStorage.getItem("orders");
const initialOrder = storedOrders ? JSON.parse(storedOrders) : [];

const useOrderStore = create<OrderStore>()((set, get) => ({
  orders: initialOrder,
  addToOrders: (data) => {
    {
      set((state: any) => {
        return { orders: [...state.orders, { ...data }] };
      });
    }
    localStorage.setItem("orders", JSON.stringify(get().orders));
  },
}));

export default useOrderStore;
