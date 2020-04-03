export const UPDATE_USER = "UPDATE_USER";

export function User(user) {
  return {
    type: UPDATE_USER,
    user
  };
}
