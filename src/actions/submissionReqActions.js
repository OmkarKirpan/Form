import { ADD_SUBMISSION_REQ, GET_SUBMISSION_REQ } from "./types";

export const addSubmissionReq = submission => {
  return {
    type: ADD_SUBMISSION_REQ,
    payload: submission
  };
};

export const getSubmissionReq = () => {
  return {
    type: GET_SUBMISSION_REQ
  };
};
