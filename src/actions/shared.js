import { getUsers } from "../actions/users";
import { _getUsers } from "../utils/_DATA";
import { logoutUser } from "./authUser";

export function handleInitialData() {
  return dispatch => {
    return _getUsers().then(users => {
      dispatch(getUsers(users));
      // User needs to be cleared out on every session
      dispatch(logoutUser());
    });
  };
}
