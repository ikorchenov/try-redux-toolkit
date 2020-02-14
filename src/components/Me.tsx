import React from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const MeComponent = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.me);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>ID: {data.id}</li>
        <li>Name: {data.name}</li>
        <li>Login: {data.login}</li>
      </ul>
    </div>
  );
};

export const Me = memo(MeComponent);
