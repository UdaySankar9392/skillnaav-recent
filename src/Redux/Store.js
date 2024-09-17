import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './JobSlice'; // Ensure the correct path

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
