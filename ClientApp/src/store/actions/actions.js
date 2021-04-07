import * as Constants from "../constants";

export const actionCreators = {
  updateFormInfo: formInfo => ({ 
    type: Constants.FORM_SUBMISSION, formInfo 
  }),

  updateCurrentState: currentState => ({
    type: Constants.SET_APP_STATE,
    currentState
  }),

  updateBacteriaId: bacteriaId => ({
    type: Constants.SET_BACTERIA,
    bacteriaId
  }),

//   addTestToPreviouslyRanList: bacteriaTest => ({
//     type: Constants.ADD_TEST_TO_PREVLIST,
//     bacteriaTest
//   }),

  addAttemptToStudentRecord: attempt => ({
    type: Constants.ADD_ATTEMPT_TO_STUDENT_RECORD,
    attempt
  }),

  addTestOptionKeyValuePair: (testId, outcomeId) => ({
    type: Constants.APPEND_OPTION_SELECTION,
    testId,
    outcomeId
  }),

  updateSelectedTest: test => ({
     type: Constants.UPDATE_SELECTED_TEST, test 
    }),

  updateSelectedOutcome: (outcome, testName) => ({
    type: Constants.UPDATE_SELECTED_OUTCOME,
    outcome,
    testName
  }),

  updateSelectedReferenceTest: testReference => ({
    type: Constants.TEST_REFERENCE_SELECTED,
    testReference
  }),

  updateReferenceOutcome: outcome => ({
    type: Constants.OUTCOME_REFERENCE_SELECTED,
    outcome
  })
};