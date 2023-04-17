/** @format */

import React from 'react';
// third-party
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducers from './reducers';

export const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default { dispatch, store, ReduxProvider };
