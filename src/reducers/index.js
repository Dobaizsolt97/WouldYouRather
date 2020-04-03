import { combineReducers } from "redux";

import Questions from "./questions";
import Users from "./users";
import User from "./updateUser";

export default combineReducers({
  Questions,
  Users,
  User
});
