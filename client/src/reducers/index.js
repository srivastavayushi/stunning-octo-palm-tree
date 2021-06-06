import { combineReducers } from "redux";
import alert from "./AlertReducer";
import auth from "./AuthReducer";
import transaction from "./AppReducer";

export default combineReducers({
  alert,
  auth,
  // transaction,
});
