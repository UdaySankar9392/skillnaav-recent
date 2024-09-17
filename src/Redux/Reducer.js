// src/Redux/Reducer.js
const jobReducer = (state = { jobPosts: [] }, action) => {
  switch (action.type) {
    case 'UPDATE_JOB_POST':
      return {
        ...state,
        jobPosts: state.jobPosts.map(job =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    case 'DELETE_JOB_POST':
      return {
        ...state,
        jobPosts: state.jobPosts.filter(job => job.id !== action.payload),
      };
    default:
      return state;
  }
};

export default jobReducer;
