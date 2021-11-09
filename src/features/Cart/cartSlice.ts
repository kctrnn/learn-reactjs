import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Product } from 'models';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      // if item is not found, add item to cart
      // otherwise, increase quantity of item
      if (index === -1) {
        state.cartItems.push(newItem);
      } else {
        state.cartItems[index].quantity += newItem.quantity;
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const cartItemId = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === cartItemId);

      state.cartItems.splice(index, 1);
    },

    changeQuantity(state, action: PayloadAction<CartItem>) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);

      state.cartItems[index].quantity = quantity;
    },
  },
});

// actions
export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

// selectors
export const selectCartItems = (state: RootState) => state.cart.cartItems;

// reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
