import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    changeStatus(state, action) {
      const findCard = state.cards.find((item) => item.id == action.payload);
      findCard.status = 1;
    },
  },
});

export const { setCards, setCard, changeStatus } = cardSlice.actions;
export default cardSlice.reducer;
