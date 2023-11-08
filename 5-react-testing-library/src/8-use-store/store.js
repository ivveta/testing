import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();
