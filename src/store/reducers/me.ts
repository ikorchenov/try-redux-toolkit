import { agent } from 'utils/apiClient';
import { createApiAction } from 'utils/createApiAction';
import { createApiReducer } from 'utils/createApiReducer';
import { User } from 'types/api';

export const meReducer = createApiReducer<User>('me');

export const fetchMe = () => createApiAction(agent.get('/users/ikorchenov'), meReducer.actions);
