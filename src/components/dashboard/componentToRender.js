/* eslint-disable import/prefer-default-export */
import React from 'react';
import Requests from './requests/requests';

localStorage.setItem('pageToRender', 'drivers');
export const ComponentToRender = () => {
  const page = localStorage.getItem('pageToRender');
  return page === 'drivers' ? (
    <Requests />
  ) : (
    <Requests />
  );
};
