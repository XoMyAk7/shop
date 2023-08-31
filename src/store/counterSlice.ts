import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count++;
    },
    decrement: state => {
      if (state.count > 0) {
        state.count--;
      }
    },
    clearShopCart: state => {
      state.count = 0;
    }
  },
});

export const {actions, reducer} = counterSlice