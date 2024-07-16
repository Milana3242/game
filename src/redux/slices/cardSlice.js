import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { setCards, setCard, changeStatus } = cardSlice.actions;
export default cardSlice.reducer;
