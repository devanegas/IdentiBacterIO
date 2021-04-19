import React, { useState } from "react";
import * as States from "../../store/states";
import { useSelector, useDispatch } from "react-redux";
import { getAppState } from "../../store/reducers/reducer";
import FormPage from "./FormPage";

const AppStart = (props) => {
	const appState = useSelector(getAppState);
	return (
		<div style={{ height: "100%" }}>
			{appState === States.FORM_STATE ? <FormPage /> : <div>hi</div>}
		</div>
	);
};

export default AppStart;
