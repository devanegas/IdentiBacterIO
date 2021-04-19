import React, { useState } from "react";
import * as States from "../../store/states";
import { useSelector, useDispatch } from "react-redux";
import { getAppState } from "../../store/reducers/reducer";
import FormPage from "./FormPage";
import Questionaire from "./Questionaire";

const AppStart = (props) => {
	const appState = useSelector(getAppState);
	return (
		<div style={{ height: "100%" }}>
			{appState === States.FORM_STATE ? <FormPage /> : <Questionaire/>}
		</div>
	);
};

export default AppStart;
