import { UPDATE_USER } from "../actions/authedUser";

export default function UpdateUser(state = { authed: null }, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        authed: action.user
      };
    default:
      return state;
  }
}
