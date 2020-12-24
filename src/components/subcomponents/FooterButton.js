import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	ButtonLogo:{
		width: '30px',
		height: 'auto',

	},
	ButtonStyle: {
		maxWidth: '40px',
		minWidth: '40px',
		minHeight: '40px',
		maxHeight: '40px',
		padding: '1%',
		height: 'auto',
		margin: '10px',
		marginBottom: '0%',

	},
}));

export default function FooterButton(props){

	const classes = useStyles();

	return(
			<Button variant="outlined" href={props.payload.link} className={classes.ButtonStyle}>
				<img src={props.payload.logo} className={classes.ButtonLogo}/>
			</Button>
	);

}