export const SET_ANSWER_U = "SET_ANSWER_U";

export function setAnswerToUsers(answer) {
  return {
    type: SET_ANSWER_U,
    answer,
  };
}

export const SET_ANSWER_Q = "SET_ANSWER_Q";

export function setAnswerToQuestions(answer) {
  return {
    type: SET_ANSWER_Q,
    answer,
  };
}
