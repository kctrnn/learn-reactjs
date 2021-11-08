import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/authSlice';
import favoriteReducer from 'features/Favorite/favoriteSlice';
import productReducer from 'features/Product/productSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    auth: authReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
