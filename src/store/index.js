import { configureStore } from "@reduxjs/toolkit";
import category from "./categorySlice";
import products from "./productsSlice";

export const store = configureStore({
  reducer: {
    category,
    products,
  },
});
