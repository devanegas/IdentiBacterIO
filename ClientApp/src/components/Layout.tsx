import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { getAppState } from "../store/reducers/reducer";
import * as States from "../store/states";

const useStyles = makeStyles({
	root: {
		height: "100%",
	},
});

export default (props: { children?: React.ReactNode }) => {
	const appState = useSelector(getAppState);
	const classes = useStyles();
	return (
		<React.Fragment>
			{appState !== States.FORM_STATE && <NavMenu />}
			<div className={classes.root}>{props.children}</div>
		</React.Fragment>
	);
};
