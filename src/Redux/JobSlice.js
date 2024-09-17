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
    updateJobPost: (state, action) => {
      state.jobPosts = state.jobPosts.map(job =>
        job.id === action.payload.id ? action.payload : job
      );
    },
    deleteJobPost: (state, action) => {
      state.jobPosts = state.jobPosts.filter(job => job.id !== action.payload);
    },
  },
});

export const { addJobPost, updateJobPost, deleteJobPost } = jobSlice.actions;
export default jobSlice.reducer;
