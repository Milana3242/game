import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    points:300
}

const pointsSlice= createSlice({
  name: 'points',
  initialState,
  reducers: {

  },
});

export const { } = pointsSlice.actions;
export default pointsSlice.reducer;
