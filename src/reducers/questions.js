import { GET_QUESTIONS } from "../actions/questions";
import { SET_QUESTION } from "../actions/questions";
import { SET_ANSWER_Q } from "../actions/answer";

export default function Questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SET_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: action.question,
      };
    case SET_ANSWER_Q:
      const { authedUser, qid, answer } = action.answer;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes].concat(authedUser),
          },
        },
      };

    default:
      return state;
  }
}
