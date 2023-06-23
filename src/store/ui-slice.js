import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addAmount: {
    isVisible: false,
    category: null,
  },
  subtractAmount: {
    isVisible: false,
    category: null,
  },
  transferAmount: {
    isVisible: false,
    category: null,
  },
  editCategory: {
    isVisible: false,
    category: null,
  },
  addCategory: {
    isVisible: false,
    category: null,
  },
  addSalary: {
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
    toogleSubtractAmount: (state, action) => {
      state.subtractAmount.isVisible = !state.subtractAmount.isVisible;
      state.subtractAmount.category = action.payload;
    },
    toogleTransferAmount: (state, action) => {
      state.transferAmount.isVisible = !state.transferAmount.isVisible;
      state.transferAmount.category = action.payload;
    },
    toogleEditCategory: (state, action) => {
      state.editCategory.isVisible = !state.editCategory.isVisible;
      state.editCategory.category = action.payload;
    },
    toogleAddCategory: (state, action) => {
      state.addCategory.isVisible = !state.addCategory.isVisible;
      state.addCategory.category = action.payload;
    },
    toogleAddSalary: (state, action) => {
      state.addSalary.isVisible = !state.addSalary.isVisible;
      state.addSalary.category = action.payload;
    },
  },
});

export const {
  toogleAddAmount,
  toogleSubtractAmount,
  toogleTransferAmount,
  toogleEditCategory,
  toogleAddCategory,
  toogleAddSalary,
} = uiSlice.actions;

export default uiSlice.reducer;
