import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    })
    .addCase(register.pending, handlePending)
    .addCase(register.rejected, handleRejected)
    .addCase(logIn.pending, handlePending)
    .addCase(logIn.rejected, handleRejected)
    .addCase(logOut.pending, handlePending)
    .addCase(logOut.rejected, handleRejected)
    .addCase(refreshUser.pending, handlePending)
    .addCase(refreshUser.rejected, (state) => {
      state.isLoading = false;
    })
  },
});

export const authReducer = authSlice.reducer;