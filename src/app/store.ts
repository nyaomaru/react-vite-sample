import authControlReducer from '@/routes/-functions/auth';
import counterReducer from '@/routes/-functions/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { auth: authControlReducer, counter: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
