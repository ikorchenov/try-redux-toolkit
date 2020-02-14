import { createSlice } from '@reduxjs/toolkit';

export const meReducer = createSlice({
  name: 'me',
  initialState: {
    loading: false,
    loaded: false,
    error: null,
    data: null,
  },
  reducers: {
    request: state => {
      state.loading = true;
    },
    success: (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { request: meRequest, success: meSuccess, fail: meFail } = meReducer.actions;
