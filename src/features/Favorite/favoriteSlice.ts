import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Meetup } from 'models';

export interface FavoriteState {
  favorites: Meetup[];
  itemIsFavorite: boolean;
}

const initialState: FavoriteState = {
  favorites: [],
  itemIsFavorite: false,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<Meetup>) {
      state.favorites.push(action.payload);
    },

    removeToFavorite(state, action: PayloadAction<string>) {
      const idNeedToRemove = action.payload;
      state.favorites = state.favorites.filter((favorite) => favorite.id !== idNeedToRemove);
    },

    itemIsFavorite(state, action: PayloadAction<string>) {
      const currentItemId = action.payload;
      state.itemIsFavorite = state.favorites.some((favorite) => favorite.id === currentItemId);
    },
  },
});

// actions
export const { addToFavorite, removeToFavorite, itemIsFavorite } = favoriteSlice.actions;

// selectors
export const selectFavoriteList = (state: RootState) => state.favorite.favorites;
export const selectItemIsFavorite = (state: RootState) => state.favorite.itemIsFavorite;

const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
