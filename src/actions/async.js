import * as DatabaseAPI from "../utils/_DATA";

import { getQuestions } from "./questions";
import { getUsers } from "./users";

export function handleInitialData() {
  return dispatch => {
    return (
      DatabaseAPI._getQuestions().then(response => {
        dispatch(getQuestions(response));
      }),
      DatabaseAPI._getUsers().then(response => {
        dispatch(getUsers(response));
      })
    );
  };
}
