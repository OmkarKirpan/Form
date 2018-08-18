import { ADD_SUBMISSION_REQ, GET_SUBMISSION_REQ } from "../actions/types";

const initialState = {
  submissionReq: [
    {
      submission:
        "Detailed submission requirements in not less than 5000 characters."
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SUBMISSION_REQ:
      return {
        ...state,
        submissionReq: [action.payload, ...state.submissionReq]
        // submissionReq: [action.payload, ...state.submissionReq]
      };
    case GET_SUBMISSION_REQ:
      return {
        ...state,
        submission: action.payload
      };
    default:
      return state;
  }
}
