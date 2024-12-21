import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import offcanvasReducer from './features/offcanvasSlice';

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      offcanvas: offcanvasReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];