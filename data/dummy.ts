import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const dummySlice = createSlice({
  name: 'dummy',
  initialState: { test: true },
  reducers: {
    changeStatus: (state) => {
      state.test = !state.test;
    },
  },
});

export default dummySlice.reducer;
export const { changeStatus } = dummySlice.actions;
