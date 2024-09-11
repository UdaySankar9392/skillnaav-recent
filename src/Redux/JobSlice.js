// src/redux/jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobPosts: [],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJobPost: (state, action) => {
      state.jobPosts.push(action.payload);
    },
  },
});

export const { addJobPost } = jobSlice.actions;
export default jobSlice.reducer;
