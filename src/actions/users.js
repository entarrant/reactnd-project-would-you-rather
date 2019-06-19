export const GET_USERS = "GET_USERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function updateUserQuestions(user, qid) {
  return {
    type: UPDATE_USER_QUESTIONS,
    user,
    qid
  };
}
