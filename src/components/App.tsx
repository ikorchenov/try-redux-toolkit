import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMe } from 'store/reducers/me';

import { Me } from './Me';

const AppComponent = () => {
  const dispatch = useDispatch();

  const handleFetchMe = useCallback(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>GitHub</h1>
        <button onClick={handleFetchMe}>Fetch me</button>
        <Me />
      </header>
    </div>
  );
};

export const App = memo(AppComponent);
