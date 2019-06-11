import { GET_QUESTIONS } from "../actions/questions";

export default function questions(state = null, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      const { questions } = action;
      let unanswered = [];
      let answered = [];

      if (state && state.authUser) {
        const authUser = state.authUser;

        Object.keys(questions).forEach(questionId => {
          const question = questions[questionId];
          if (
            question.optionOne.votes.includes(authUser) ||
            question.optionTwo.votes.includes(authUser)
          ) {
            answered = answered.concat(question);
          } else {
            unanswered = unanswered.concat(question);
          }
        });
      }

      return {
        ...state,
        unanswered,
        answered
      };
    default:
      return state;
  }
}
