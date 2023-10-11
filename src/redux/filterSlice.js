import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: ' filter',
  initialState: {
    filters: {
      selectedMake: '',
      selectedPrice: '',
      minMileage: '',
      maxMileage: '',
    },
    filtersFavorite: {
      selectedMake: '',
      selectedPrice: '',
      minMileage: '',
      maxMileage: '',
    },
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilter: state => {
      state.filters.selectedMake = '';
      state.filters.selectedPrice = '';
      state.filters.minMileage = '';
      state.filters.maxMileage = '';
    },
    setFilterFavorite: (state, action) => {
      state.filtersFavorite = {
        ...state.filtersFavorite,
        ...action.payload,
      };
    },
    resetFilterFavorite: state => {
      state.filtersFavorite.selectedMake = '';
      state.filtersFavorite.selectedPrice = '';
      state.filtersFavorite.minMileage = '';
      state.filtersFavorite.maxMileage = '';
    },
  },
});

export const {
  setFilter,
  resetFilter,
  setFilterFavorite,
  resetFilterFavorite,
} = filterSlice.actions;

export default filterSlice.reducer;
