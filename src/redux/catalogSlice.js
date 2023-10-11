import { createSlice } from '@reduxjs/toolkit';

// const handlePanding = (state, action) => {
//   state.isLoading = true;
// };

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    adverts: [],
    page: 1,
    filters: {
      make: '',
      price: '',
      minMileage: '',
      maxMileage: '',
    },
    favorites: {
      make: '',
      price: '',
      minMileage: '',
      maxMileage: '',
    },
  },
  reducers: {
    firstAdverts: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
      state.page = state.page + 1;
    },
    setAdverts: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
    },
    setPage: (state, action) => {
      state.page = state.page + 1;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setFavorites: (state, action) => {
      state.favorites = { ...state.favorites, ...action.payload };
    },
  },
});

export const { firstAdverts, setAdverts, setPage, setFilters, setFavorites } =
  catalogSlice.actions;

export default catalogSlice.reducer;
