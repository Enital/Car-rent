import { createSlice } from '@reduxjs/toolkit';

const advertSlice = createSlice({
  name: 'advert',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = advertSlice.actions;
export default advertSlice.reducer;
