import { getUsers, updateUserQuestions } from "./users";
import { _getUsers, _getQuestions, _saveQuestion } from "../utils/_DATA";
import { addQuestion, getQuestions } from "./questions";

export function loadUserData() {
  return dispatch => {
    return Promise.all([_getUsers()]).then(([users]) => {
      dispatch(getUsers(users));
    });
  };
}

export function loadQuestionsData(authUser) {
  return dispatch => {
    return Promise.all([_getQuestions()]).then(([questions]) => {
      dispatch(getQuestions(questions, authUser));
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    _saveQuestion({ optionOneText, optionTwoText, author: authUser }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(updateUserQuestions(authUser, question.id));
      }
    );
  };
}
