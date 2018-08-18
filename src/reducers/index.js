import { combineReducers } from "redux";
import submissionReqReducer from "./submissionReqReducer";

export default combineReducers({
  submissionReq: submissionReqReducer
});
