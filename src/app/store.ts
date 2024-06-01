import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/routes/-functions/counterSlice';
import authControlReducer from '@/routes/-functions/auth';

export const store = configureStore({
  reducer: { auth: authControlReducer, counter: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
