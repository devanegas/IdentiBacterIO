import * as Constants from "../constants";
import * as States from "../states";

const initialStudentState = {
	formInfo: {
		groupName: ""
	},
	bacteriaId: null,
	attempts: [],
};

const initialAppState = {
	currentState: States.FORM_STATE,
};

const studentReducer = (state, action) => {
	state = state || initialStudentState;

    return state;

};

const appReducer = (state, action) => {
    state = state || initialAppState;

    return state;

};

export { studentReducer, appReducer };
