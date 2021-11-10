import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { RootState } from 'app/store';
import { StorageKeys } from 'constants/index';
import { LoginPayload, RegisterPayload, User } from 'models';

export interface AuthState {
  currentUser: Partial<User>;
}

export const login = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
  const { accessToken } = await userApi.login(payload);

  //   save token to local storage
  localStorage.setItem(StorageKeys.TOKEN, accessToken);

  const user = await userApi.getMe();
  localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
  return user;
});

export const register = createAsyncThunk('auth/register', async (payload: RegisterPayload) => {
  const { accessToken } = await userApi.register(payload);

  //   save token to local storage
  localStorage.setItem(StorageKeys.TOKEN, accessToken);

  const user = await userApi.getMe();
  localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
  return user;
});

const initialState: AuthState = {
  currentUser: JSON.parse(localStorage.getItem(StorageKeys.USER) || '{}') || {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = {};

      //   clear local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.EXPIRED);
      localStorage.removeItem(StorageKeys.USER);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

// actions
export const { logout } = authSlice.actions;

// selectors
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

// reducer
const authReducer = authSlice.reducer;
export default authReducer;
