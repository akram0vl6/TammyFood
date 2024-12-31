import { createSlice } from "@reduxjs/toolkit";
import { produks } from "../../data/data";

// Тип элемента корзины
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Тип состояния корзины
type CartState = {
  produks: CartItem[];
};

// Начальное состояние
const initialState: CartState = {
  produks: [],
};

// Создание среза корзины
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: { payload: CartItem }) {
      state.produks.push(action.payload);
    },
  },
});

// Экспорт действий и редьюсера
export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
