import { GET_USERS } from "../actions/users";
import { SET_ANSWER_U } from "../actions/answer";

export default function Users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SET_ANSWER_U:
      const { authedUser, qid, answer } = action.answer;
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
    default:
      return state;
  }
}
