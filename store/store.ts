import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { groceryApi } from "../src/services/groceryApi";
import cartReducer from "../src/screens/Cart/cartSlice";

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  [groceryApi.reducerPath]: groceryApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(groceryApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
