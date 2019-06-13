export const GET_QUESTIONS = "GET_QUESTIONS";

export function getQuestions(questions, authUser) {
  return {
    type: GET_QUESTIONS,
    questions,
    authUser
  };
}
