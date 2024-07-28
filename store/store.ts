import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/screens/Cart/cartSlice";
import { groceryApi } from "../src/services/groceryApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [groceryApi.reducerPath]: groceryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groceryApi.middleware),
});

export default store;
