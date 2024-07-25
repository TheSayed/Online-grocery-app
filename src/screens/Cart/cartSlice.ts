import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      const existingProduct = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (!existingProduct) {
        state.cartItems = [
          ...state.cartItems,
          { product: action.payload, quantity: 1 },
        ];
      } else {
        state.cartItems = [
          ...state.cartItems.filter(
            (item) => item.product.id !== action.payload.id
          ),
          {
            product: action.payload,
            quantity: existingProduct.quantity + 1,
          },
        ];
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (!existingProduct) {
        return;
      }
      if (existingProduct.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== action.payload.id
        );
      } else {
        state.cartItems = [
          ...state.cartItems.filter(
            (item) => item.product.id !== action.payload.id
          ),
          {
            product: action.payload,
            quantity: existingProduct.quantity - 1,
          },
        ];
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (!existingProduct) {
        return;
      }
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart, decrementProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
