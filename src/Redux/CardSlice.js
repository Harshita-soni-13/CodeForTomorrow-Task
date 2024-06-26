import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [], 
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(...action.payload); 
    },
    removeCard: (state, action) => {
      console.log("entered removeCard");
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;