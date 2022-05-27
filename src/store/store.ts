import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './slices/animalSlice';

const store = configureStore({
  reducer: {
    animalList: animalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
