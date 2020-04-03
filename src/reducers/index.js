import { combineReducers } from "redux";

import Questions from "./questions";
import Users from "./users";

export default combineReducers({
  Questions,
  Users
});
