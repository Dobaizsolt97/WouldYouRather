import * as DatabaseAPI from "../utils/_DATA";

import { getQuestions } from "./questions";
import { getUsers } from "./users";
import { setQuestion } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return (
      DatabaseAPI._getQuestions().then((response) => {
        dispatch(getQuestions(response));
      }),
      DatabaseAPI._getUsers().then((response) => {
        dispatch(getUsers(response));
      })
    );
  };
}

export function handleSetQuestion(question) {
  return (dispatch) => {
    return DatabaseAPI._saveQuestion(question).then((response) => {
      dispatch(setQuestion(response));
    });
  };
}

export function handleSetAnswer(answer) {
  return (dispatch) => {
    return DatabaseAPI._saveQuestionAnswer(answer).then(
      (response) => console.log(response),
      console.log("the shit is done")
    );
  };
}
