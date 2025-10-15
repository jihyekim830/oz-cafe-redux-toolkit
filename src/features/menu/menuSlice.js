import { createSlice } from '@reduxjs/toolkit';
import data from '@assets/data';

const menuSlice = createSlice({
  name: 'menu',
  initialState: data.menu,
  reducers: {},
});

export default menuSlice.reducer;
