import { getUsers } from "../actions/users";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import { getQuestions } from "./questions";

export function loadUserData() {
  return dispatch => {
    return Promise.all([_getUsers()]).then(([users]) => {
      dispatch(getUsers(users));
    });
  };
}

export function loadQuestionsData() {
  return dispatch => {
    return Promise.all([_getQuestions()]).then(([questions]) => {
      dispatch(getQuestions(questions));
    });
  };
}
