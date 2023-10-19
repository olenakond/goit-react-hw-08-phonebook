import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const instance = axios.create({
	baseURL: 'https://practices-api.vercel.app/',
})

export const setToken = (token) => {
	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const deleteToken = () => {
	delete instance.defaults.headers.common['Authorization']
}

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', body);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', body);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      deleteToken();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
