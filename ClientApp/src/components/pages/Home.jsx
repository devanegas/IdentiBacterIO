import React from "react";
import { Card, TextField } from "@material-ui/core";

const Home = (props) => {
	return (
		<div>
			<Card elevation={3}>
				<TextField variant="outlined" margin='dense'/>
                <TextField variant="outlined" margin='dense'/>
                <TextField variant="outlined" margin='dense'/>
                <TextField variant="outlined" margin='dense'/>
			</Card>
		</div>
	);
};

export default Home;
