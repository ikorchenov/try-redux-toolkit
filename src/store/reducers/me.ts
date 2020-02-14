import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types/api';
import { agent } from '../../utils/apiClient';
import { createInitialState } from '../../utils/createInitialState';
import { createApiAction } from '../../utils/createApiAction';

export const meReducer = createSlice({
  name: 'me',
  initialState: createInitialState<User>(),
  reducers: {
    request: state => {
      state.loading = true;
    },
    success: (state, action: PayloadAction<User>) => {
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

export const fetchMe = () => createApiAction(agent.get('/users/ikorchenov'), meReducer.actions);
