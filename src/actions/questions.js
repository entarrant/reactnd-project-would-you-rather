export const GET_QUESTIONS = "GET_QUESTIONS";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function getQuestions(questions, authUser) {
  return {
    type: GET_QUESTIONS,
    questions,
    authUser
  };
}

export function clearQuestions() {
  return {
    type: CLEAR_QUESTIONS
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function answerQuestion(authUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authUser,
    qid,
    answer
  };
}
