import * as Constants from "../constants";
import * as States from "../states";

const initialStudentState = {
	formInfo: {
		groupName: "",
	},
	bacteriaId: null,
	attempts: [],
};

const initialAppState = {
	currentState: States.FORM_STATE,
};

const studentReducer = (state, action) => {
	state = state || initialStudentState;
	if (action.type === Constants.FORM_SUBMISSION) {
		return { ...state, formInfo: action.payload}
	}

	return state;
};

const appReducer = (state, action) => {
	state = state || initialAppState;

	if (action.type === Constants.SET_APP_STATE) {
		return { ...state, currentState: action.payload}
	}

	return state;
};

// Selectors
export const getAppState = (state) => state.appState.currentState
export const getFormData = (state) => state.studentState.formInfo;
export { studentReducer, appReducer };
