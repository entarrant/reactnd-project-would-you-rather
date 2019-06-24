import {
  GET_USERS,
  UPDATE_USER_ANSWERS,
  UPDATE_USER_QUESTIONS
} from "../actions/users";

export default function users(state = null, action) {
  const { user, qid } = action;

  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat(qid)
        }
      };
    case UPDATE_USER_ANSWERS:
      const { answer } = action;

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
