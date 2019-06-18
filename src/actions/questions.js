export const GET_QUESTIONS = "GET_QUESTIONS";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";

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
