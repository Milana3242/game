import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 300,
};

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    spendPoints(state, action) {
      state.points = state.points - action.payload;
    },
    addPoints(state, action) {
      state.points = state.points + action.payload;
    },
    manyPoints(state, action) {
      state.points=1000
    },
  },
});

export const { spendPoints, addPoints,manyPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
