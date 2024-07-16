import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Milana",
  points: 300,
  openCategories: [{ categoryId: "1",}],
};

const pointsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addOpenCategory(state, action) {
      const categId = action.payload.id;
      state.openCategories.push({ categoryId: categId, });
    },

  },
});

export const { addOpenCategory,  } = pointsSlice.actions;
export default pointsSlice.reducer;
