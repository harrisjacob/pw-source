import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	ButtonLayout:{
		margin:"3%",
		marginBottom:0,
		alignItems: "center",
		width: "15%",
		// paddingTop: '12px',
		// paddingBottom: '12px',
		minWidth: "150px",
		maxWidth: "220px",
		backgroundColor:'black',
		borderRadius: "5em",
		"&:hover": {
			backgroundColor:theme.palette.gray.dark,
		},

    	[theme.breakpoints.down('md')]: {
	 		width:"30%",
    	},
	},
	ButtonText:{
		color: 'white',
	},
	ButtonGrid:{
		justifyContent:"center",


		[theme.breakpoints.up('sm')]: {
	 		paddingTop: '9px',
			paddingBottom: '9px',
    	},

	},
}));

export default function NdButton(props){

	const classes = useStyles();

	return(
			<Button variant="contained" className={classes.ButtonLayout} href={props.link}>
				<Grid container spacing={0} className={classes.ButtonGrid}>
					<Grid item xs={12}>
						<Typography variant="button" className={classes.ButtonText}>{props.text}</Typography>
					</Grid>
				</Grid>
			</Button>

	);

}