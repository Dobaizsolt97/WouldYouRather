import { GET_QUESTIONS } from "../actions/questions";
import { SET_QUESTION } from "../actions/questions";

export default function Questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SET_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: action.question
      };
    default:
      return state;
  }
}
