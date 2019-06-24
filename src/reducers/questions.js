import {
  GET_QUESTIONS,
  CLEAR_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION
} from "../actions/questions";

export default function questions(state = null, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      const { questions, authUser } = action;
      let unanswered = [];
      let answered = [];

      Object.keys(questions).forEach(questionId => {
        const question = questions[questionId];
        if (
          question.optionOne.votes.includes(authUser) ||
          question.optionTwo.votes.includes(authUser)
        ) {
          answered = answered.concat(questionId);
        } else {
          unanswered = unanswered.concat(questionId);
        }
      });

      return {
        ...state,
        allQuestions: questions,
        unanswered,
        answered
      };
    case CLEAR_QUESTIONS:
      return null;
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        allQuestions: {
          ...state.allQuestions,
          [question.id]: question
        },
        unanswered: state.unanswered.concat(question.id)
      };
    case ANSWER_QUESTION:
      const { qid, answer } = action;
      const quest = state.allQuestions[qid];

      return {
        ...state,
        allQuestions: {
          ...state.allQuestions,
          [qid]: {
            ...quest,
            [answer]: {
              ...quest[answer],
              votes: quest[answer].votes.concat(action.authUser)
            }
          }
        },
        unanswered: state.unanswered.filter(id => id !== qid),
        answered: state.answered.concat(qid)
      };
    default:
      return state;
  }
}
