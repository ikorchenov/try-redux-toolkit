import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface State<T> {
  loading: boolean;
  loaded: boolean;
  data?: T;
  error?: Error;
}

export interface ReqActions<S> {
  request: ActionCreatorWithoutPayload;
  success: ActionCreatorWithPayload<S>;
  fail: ActionCreatorWithPayload<Error>;
}