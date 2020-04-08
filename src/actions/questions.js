export const GET_QUESTIONS = "GET_QUESTIONS";
export const SET_QUESTION = "SET_QUESTION";
export const SET_QUESTION_TO_USERS = "SET_QUESTION_TO_USERS";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function setQuestion(question) {
  return {
    type: SET_QUESTION,
    question,
  };
}
