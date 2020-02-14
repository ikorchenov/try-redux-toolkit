import { State } from '../types/store';

export const createInitialState = <T>(data?: T): State<T> => ({
  loading: false,
  loaded: false,
  error: undefined,
  data,
});
