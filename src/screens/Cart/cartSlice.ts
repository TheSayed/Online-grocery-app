import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log("addToCart action payload:", action.payload);
      const existingProduct = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (!existingProduct) {
        state.cartItems.push({ product: action.payload, quantity: 1 });
      } else {
        return;
      }
      console.log("cartItems after addToCart:", state.cartItems);
    },
    incrementProductQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cartItems.find(
        (item) => item.product.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cartItems.find(
        (item) => item.product.id === action.payload
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product.id !== action.payload
          );
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
