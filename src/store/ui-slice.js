import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addAmount: {
    isVisible: false,
    category: null,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogleAddAmount: (state, action) => {
      state.addAmount.isVisible = !state.addAmount.isVisible;
      state.addAmount.category = action.payload;
    },
  },
});

export const { toogleAddAmount } = uiSlice.actions;

export default uiSlice.reducer;
