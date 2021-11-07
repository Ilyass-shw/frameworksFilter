import { createSlice } from '@reduxjs/toolkit';
import items from '../pages/Items';
import termUpdatedReducer from './termUpdatedReducer';

const initialState = {
  searchTerm: '',
  searchResults: items,
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    searchTermUpdated: termUpdatedReducer,
  },
});

export const { searchTermUpdated } = searchSlice.actions;

export default searchSlice.reducer;
