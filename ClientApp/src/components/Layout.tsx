import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
	  height: '100%'
	},
  });

export default (props: { children?: React.ReactNode }) => {
    const classes = useStyles()
    return(
    <React.Fragment>
        <NavMenu/>
        <div className={classes.root}>
            {props.children}
        </div>
    </React.Fragment>
    )
};
