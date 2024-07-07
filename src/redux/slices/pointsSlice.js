import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 300,
};

const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    spendPoints(state, action) {
      state.points = state.points - action.payload;
      state.oneGamePoints = state.oneGamePoints - action.payload;
    },
    addPoints(state, action) {
      state.points = state.points + action.payload;
      state.oneGamePoints = state.oneGamePoints + action.payload;
    },
  },
});

export const { spendPoints, addPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
