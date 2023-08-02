import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const {
  reducer: counterSlice,
  actions: { increment, decrement },
} = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export { counterSlice, increment, decrement };
