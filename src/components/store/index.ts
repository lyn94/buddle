import { configureStore } from '@reduxjs/toolkit';

import TestRedux_Store from '../reducer/TestRedux_Store';

// 전역 스토어
export const store = configureStore({
  reducer: { TestRedux_Store },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
