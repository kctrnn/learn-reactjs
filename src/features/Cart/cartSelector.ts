import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const cartItemsSelector = (state: RootState) => state.cart.cartItems;

// Calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
