import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      const present = state.find((quote) => quote._id === action.payload._id);
      if (!present) {
        state.push(action.payload);
      }
    },
    removeQuote: (state, action) => {
      return state.filter((quote) => quote._id !== action.payload);
    },
  },
});

export const getAllFavourites = (state) => state.favourite;

export const { addQuote, removeQuote } = favouriteSlice.actions;

export default favouriteSlice.reducer;
