import { GET_USERS } from "../actions/users";
import { SET_ANSWER_U } from "../actions/answer";
import { SET_QUESTION } from "../actions/questions";

export default function Users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SET_ANSWER_U:
      let { authedUser, qid, answer } = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case SET_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions.concat([id])],
        },
      };

    default:
      return state;
  }
}
