import { combineReducers } from '@reduxjs/toolkit';
import { meReducer } from './me';

export const rootReducer = combineReducers({
  me: meReducer.reducer,
});
