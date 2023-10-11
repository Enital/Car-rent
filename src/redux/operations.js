import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://651fc0b1906e276284c373de.mockapi.io/api/v1/';
axios.defaults.baseURL = 'https://65218c36a4199548356d5ab9.mockapi.io';

export const setAdverts = createAsyncThunk(
  'catalog/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get('/adverts', {
        params: { page: page, limit: 8 },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAllAdverts = createAsyncThunk(
  'catalog/fetchAllAdverts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/adverts');
      console.log(res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
