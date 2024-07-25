import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../src/screens/Cart/cartSlice";
import { groceryApi } from "../src/services/groceryApi";

const store = configureStore({
  reducer: {
    cartSlice,
    [groceryApi.reducerPath]: groceryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groceryApi.middleware),
});

export default store;
