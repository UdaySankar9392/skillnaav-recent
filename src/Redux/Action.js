// src/Redux/Action.js
export const updateJobPost = (updatedJob) => ({
  type: 'UPDATE_JOB_POST',
  payload: updatedJob,
});

export const deleteJobPost = (jobId) => ({
  type: 'DELETE_JOB_POST',
  payload: jobId,
});
