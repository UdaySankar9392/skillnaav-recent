import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './JobSlice';  // Ensure the path is correct

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
