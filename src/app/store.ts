import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/counterSlice';
import authControlReducer from '@/features/auth/auth';

export const store = configureStore({
  reducer: { auth: authControlReducer, counter: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
