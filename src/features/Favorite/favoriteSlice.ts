import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Meetup } from 'models';

export interface FavoriteState {
  favorites: Meetup[];
}

const initialState: FavoriteState = {
  favorites: [],
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
  },
});

// actions
export const { addToFavorite, removeToFavorite } = favoriteSlice.actions;

// selectors
export const selectFavoriteList = (state: RootState) => state.favorite.favorites;

// reducer
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
