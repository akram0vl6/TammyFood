// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slides/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


