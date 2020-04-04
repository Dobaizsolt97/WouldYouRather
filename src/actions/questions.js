export const GET_QUESTIONS = "GET_QUESTIONS";
export const SET_QUESTION = "SET_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function setQuestion(question) {
  return {
    type: SET_QUESTION,
    question
  };
}
