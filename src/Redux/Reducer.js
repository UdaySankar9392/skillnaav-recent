// reducer.js
const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_JOB_POST':
        return {
          ...state,
          jobPosts: state.jobPosts.map(job =>
            job.id === action.payload.id ? { ...job, ...action.payload } : job
          ),
        };
      // Handle other actions...
      default:
        return state;
    }
  };
  