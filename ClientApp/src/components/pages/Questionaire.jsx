import React from "react";
import {
	Card,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	pageContainer: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
	},
	questionaireContainer: {
		width: 1000,
	},
	card: {
		padding: 15,
		margin: 15,
	},
	formControl: {
		margin: 5,
	},
});

const Questionaire = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.pageContainer}>
			<div className={classes.questionaireContainer}>
				<Card className={classes.card}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<FormControl
							required
							margin="dense"
							className={classes.formControl}
							variant="outlined"
							fullWidth
						>
							<InputLabel>Age</InputLabel>
							<Select
								label="Category"
								variant="outlined"
								onChange={() => console.log("hi")}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							required
							margin="dense"
							className={classes.formControl}
							variant="outlined"
							fullWidth
						>
							<InputLabel>Age</InputLabel>
							<Select
								label="Category"
								variant="outlined"
								onChange={() => console.log("hi")}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							required
							margin="dense"
							className={classes.formControl}
							variant="outlined"
							fullWidth
						>
							<InputLabel>Age</InputLabel>
							<Select
								label="Category"
								variant="outlined"
								onChange={() => console.log("hi")}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
				</Card>
				<div style={{ display: "flex", width: "100%" }}>
					<Card style={{ width: "50%" }} className={classes.card}>
						Hi
					</Card>
					<Card style={{ width: "50%" }} className={classes.card}>
						Hi
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Questionaire;
