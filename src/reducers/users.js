import {
  GET_USERS,
  UPDATE_USER_ANSWERS,
  UPDATE_USER_QUESTIONS
} from "../actions/users";

export default function users(state = null, action) {
  const { user, qid } = action;

  switch (action.type) {
    case GET_USERS:
      const { users } = action;

      Object.keys(users).forEach(userId => {
        const currUser = users[userId];
        users[userId]["points"] =
          currUser.questions.length + Object.keys(currUser.answers).length;
      });

      return users;
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat(qid),
          points: state[user].points + 1
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
          },
          points: state[user].points + 1
        }
      };
    default:
      return state;
  }
}
