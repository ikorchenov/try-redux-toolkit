import { Dispatch } from '@reduxjs/toolkit';
import { Request } from 'superagent';
import { ReqActions } from '../types/store';

export const createApiAction = <P extends Request, D>(promise: P, actions: ReqActions<D>) => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch(actions.request());
    const res = await promise;
    dispatch(actions.success(res.body));
  } catch (error) {
    dispatch(actions.fail(error));
  }
};
