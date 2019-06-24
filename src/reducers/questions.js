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
        unanswered: unanswered.sort(
          (q1, q2) => questions[q2].timestamp - questions[q1].timestamp
        ),
        answered: answered.sort(
          (q1, q2) => questions[q2].timestamp - questions[q1].timestamp
        )
      };
    case CLEAR_QUESTIONS:
      return null;
    case ADD_QUESTION:
      const { question } = action;
      // Add new question to front of user's unanswered list
      state.unanswered.unshift(question.id);

      return {
        ...state,
        allQuestions: {
          ...state.allQuestions,
          [question.id]: question
        }
      };
    case ANSWER_QUESTION:
      const { qid, answer } = action;
      const quest = state.allQuestions[qid];

      // Add answered question to front of user's answered list
      state.answered.unshift(quest.id);

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
        unanswered: state.unanswered.filter(id => id !== qid)
      };
    default:
      return state;
  }
}
