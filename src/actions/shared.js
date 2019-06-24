import { getUsers, updateUserQuestions, updateUserAnswers } from "./users";
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../utils/_DATA";
import { addQuestion, answerQuestion, getQuestions } from "./questions";

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

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    _saveQuestionAnswer({ authedUser: authUser, qid, answer }).then(() => {
      dispatch(answerQuestion(authUser, qid, answer));
      dispatch(updateUserAnswers(authUser, qid, answer));
    });
  };
}
