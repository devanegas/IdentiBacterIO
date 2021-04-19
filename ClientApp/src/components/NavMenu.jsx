import * as React from "react";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { makeStyles } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";

const useStyles = makeStyles({
	navbar: {
		background: "linear-gradient(45deg, #32ce9f 30%, #149092 90%)",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		height: 60,
		boxShadow: "0 8px 6px -6px #999",
	},
	icon: {
		fill: "white",
	},
});

const NavMenu = (props) => {
	const classes = useStyles();

	return (
		<header>
			<div className={classes.navbar}>
				<div style={{display: 'flex', alignSelf: "center",}}>
					<Link to="/">
						<IconButton>
							<HomeRoundedIcon className={classes.icon} />
						</IconButton>
					</Link>
					<Link to="/reference">
						<IconButton>
							<SearchRoundedIcon className={classes.icon} />
						</IconButton>
					</Link>
					<Link to="/dashboard">
						<IconButton>
							<MenuBookRoundedIcon className={classes.icon} />
						</IconButton>
					</Link>
					<Link to="/home">
						<IconButton>
							<MenuBookRoundedIcon className={classes.icon} />
						</IconButton>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default NavMenu;
