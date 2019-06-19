import { GET_USERS, UPDATE_USER_QUESTIONS } from "../actions/users";

export default function users(state = null, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case UPDATE_USER_QUESTIONS:
      const { user } = action;

      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat(action.qid)
        }
      };
    default:
      return state;
  }
}
