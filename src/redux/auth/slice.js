import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(logIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(logOut.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logOut.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
    })
    .addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
});

export const authReducer = authSlice.reducer;
