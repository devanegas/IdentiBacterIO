import React, { useState } from "react";
import * as States from "../../store/states";
import { useSelector, useDispatch } from "react-redux";
import { getAppState } from "../../store/reducers/reducer";
import FormPage from './FormPage'

const AppStart = (props) => {
	const appState = useSelector(getAppState);
	return (
		<div>{appState === States.FORM_STATE ? <FormPage /> : <div>nope</div>}</div>
	);
};

export default AppStart;
