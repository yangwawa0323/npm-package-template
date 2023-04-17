/** @format */

// types
import { createSlice } from '@reduxjs/toolkit';
import { cleanTokenEtag } from '../../auth';

// initial state
const initialState = {
  hasBeenLogin: false,
  user: null, // user: { name , token }
};

// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    login(state /* action */) {
      // should validate the token
      // if (localStorage.getItem('token')) {
      state.hasBeenLogin = true;
      // }
    },
    logout(state /* action */) {
      cleanTokenEtag();
      state.hasBeenLogin = false;
    },
    /* eslint-enable no-param-reassign */
  },
});

export default auth.reducer;

export const { login, logout } = auth.actions;
