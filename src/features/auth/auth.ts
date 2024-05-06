import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthSchema } from './schema';

const initialState: AuthSchema = {
  username: '',
  password: '',
};

export const authControl = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<AuthSchema>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    clear: (state) => {
      initState(state);
    },
  },
});

const getKeys = <T extends Record<string, unknown>>(obj: T): (keyof T)[] => {
  return Object.keys(obj);
};

const initState = (state: AuthSchema) => {
  for (const key of getKeys(state)) {
    state[key] = initialState[key];
  }
};

export const { register, clear } = authControl.actions;

export default authControl.reducer;
