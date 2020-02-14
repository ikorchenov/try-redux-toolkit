import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { createInitialState } from './createInitialState';
import { State } from '../types/store';

export const createApiReducer = <T>(name: string, initialData?: T) =>
  createSlice({
    name,
    initialState: createInitialState(initialData),
    reducers: {
      request: state => {
        state.loading = true;
      },
      success: (state: Draft<State<T>>, action: PayloadAction<typeof state.data>) => {
        state.loaded = true;
        state.loading = false;
        state.error = undefined;
        state.data = action.payload;
      },
      fail: (state, action: PayloadAction<Error>) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
