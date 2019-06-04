import { getUsers } from "../actions/users";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import { logoutUser } from "./authUser";
import { getQuestions } from "./questions";

export function handleInitialData() {
  return dispatch => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        // User needs to be cleared out on every session
        dispatch(logoutUser());
      }
    );
  };
}
