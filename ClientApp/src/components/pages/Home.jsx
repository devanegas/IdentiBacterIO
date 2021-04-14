import React from "react";
import { Card, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LeavesImage from "../../img/leaves.jpeg";
const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #32ce9f 30%, #149092 90%)",
		height: "100%",
	},
	container: {
		display: "flex",
		justifyContent: "center",
		height: "100%",
	},
	card: {
		alignSelf: "center",
		borderRadius: 15,
		display: "flex",
		padding: 0,
		width: 800,
	},
	form: {
		width: "50%",
	},
	imageContainer: {
		width: "50%",
		position: "relative",
	},
	image: {
		height: 400,
		width: 400,
	},
	button: {
		border: "1px solid #35c730",
		color: "35c730",
	},
});

const Home = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Card elevation={3} className={classes.card}>
					<div className={classes.imageContainer}>
						<div style={{ position: "absolute", color: "white" }}>
							IdentiBacterIO
						</div>
						<img src={LeavesImage} className={classes.image} />
					</div>
					<div className={classes.form}>
						<div
							style={{
								textAlign: "center",
								fontSize: 26,
								fontWeight: 100,
								marginTop: 35,
							}}
						>
							Let's Get Started!
						</div>
						<div style={{ margin: "30px 60px" }}>
							<TextField
								label="Group Name"
								variant="outlined"
								margin="dense"
								fullWidth
							/>
							{/* <TextField label='Badger IDs' variant="outlined" margin="dense" fullWidth/> */}
							<TextField variant="outlined" margin="dense" fullWidth />
							<TextField variant="outlined" margin="dense" fullWidth />
							<div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
								<Button fullWidth variant="outlined" className={classes.button}>
									Continue
								</Button>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Home;
