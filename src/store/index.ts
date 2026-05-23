import { configureStore } from '@reduxjs/toolkit';
import mapaReducer from './mapaSlice.ts';

export const store = configureStore({
  reducer: {
    mapa: mapaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
