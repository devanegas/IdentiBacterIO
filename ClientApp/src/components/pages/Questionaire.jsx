import React, { useEffect, useState } from "react";
import {
	Card,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getAllBacteria } from "../../api/bacteria";
import { getAllCategories } from "../../api/categories";
import { getAllTests } from "../../api/tests";
import LeavesImage from "../../img/leaves.jpeg";
import { ContactSupportSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
	},
	questionaireContainer: {
		width: 1000,
	},
	card: {
		margin: '20px 20px 0px 0px'
	},
	formControl: {
		margin: 5,
	},
	runButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		margin: 4,
		height: 40,
	},
	option: {
		marginTop: 20,
		textAlign: "center",
	},
}));

const ClickableOption = (props) => {
	const classes = useStyles();
	const isSelected = props.isSelected;
	const displayText = props.displayText;
	const onClick = props.onClick;
	return (
		<Card
			onClick={onClick}
			className={classes.option}
			style={{ backgroundColor: isSelected ? "#32ce9f" : "white" }}
		>
			<CardActionArea style={{ padding: 10, fontWeight: 500, color: isSelected ? 'white' : 'black' }}>
				{displayText}
			</CardActionArea>
		</Card>
	);
};

const testOptions = [
	{ id: 1, description: "A" },
	{ id: 2, description: "B" },
	{ id: 3, description: "C" },
	{ id: 4, description: "D" },
];

const Questionaire = (props) => {
	const classes = useStyles();
	const [bacterias, setBacterias] = useState([]);
	const [categories, setCategories] = useState([]);
	const [tests, setTests] = useState([]);
	const [selectedOptionId, setSelectedOptionId] = useState();

	//Selection states
	const [availableTests, setAvailableTests] = useState([]);
	const [selectedCategoryId, setSelectedCategoryId] = useState(null);

	useEffect(() => {
		getAllBacteria().then((response) => {
			console.log("bacteria", response);
			setBacterias(response);
		});
		getAllCategories().then((response) => {
			console.log("categories", response);
			setCategories(response);
		});
		getAllTests().then((response) => {
			console.log("tests", response);
			setTests(response);
		});
	}, []);

	useEffect(() => {
		if (selectedCategoryId) {
			let filteredTests = tests.filter(
				(t) => t.testCategory.id === selectedCategoryId
			);
			setAvailableTests(filteredTests);
		}
	}, [selectedCategoryId]);
	return (
		<div className={classes.pageContainer}>
			<div className={classes.questionaireContainer}>
				<Card className={classes.card}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<FormControl
							required
							margin="dense"
							color="primary"
							className={classes.formControl}
							variant="outlined"
							fullWidth
						>
							<InputLabel>Category</InputLabel>
							<Select
								label="Category"
								variant="outlined"
								value={selectedCategoryId}
								onChange={(e) => setSelectedCategoryId(e.target.value)}
							>
								{categories.map((category, index) => (
									<MenuItem key={index} value={category.id}>
										{category.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl
							required
							margin="dense"
							className={classes.formControl}
							variant="outlined"
							fullWidth
						>
							<InputLabel>Test</InputLabel>
							<Select
								label="Test"
								variant="outlined"
								onChange={() => console.log("hi")}
							>
								{availableTests.map((test, index) => (
									<MenuItem key={index} value={test.id}>
										{test.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<div>
							<Button className={classes.runButton}>Run</Button>
						</div>
						{/* <FormControl
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
						</FormControl> */}
					</div>
				</Card>
				<div style={{ display: "flex", width: "100%" }}>
					<div style={{ width: "50%" }} className={classes.card}>
						{testOptions.map((option, index) => (
							<ClickableOption
								isSelected={selectedOptionId === option.id}
								onClick={() => setSelectedOptionId(option.id)}
								displayText={option.description}
							/>
						))}
					</div>
					<Card style={{ width: "50%" }} className={classes.card}>
						<img src={LeavesImage} />
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Questionaire;
