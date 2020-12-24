import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	ButtonLayout:{
		margin:"3%",
		marginBottom:0,
		alignItems: "center",
		width: "15%",
		minWidth: "150px",
		maxWidth: "220px",
		backgroundColor: theme.palette.teal.dark,
		borderRadius: "5em",
		"&:hover": {
			backgroundColor:theme.palette.teal.main,

		},

    	[theme.breakpoints.down('md')]: {
	 		width:"30%",
    	},
	},
	ButtonLogo:{
		width: '30px',
		height: 'auto',
		paddingTop:'5px'

	},

	ButtonText:{
		color: theme.palette.secondary.main,
	},
	ButtonGrid:{
		justifyContent:"center",
	},
	ButtonItem:{
		alignSelf: "center",
		textAlign: "center",
	}
}));

export default function GithubButton(props){

	const classes = useStyles();

	return(
			<Button variant="outlined" className={classes.ButtonLayout} href={props.link}>
				<Grid container spacing={0} className={classes.ButtonGrid}>
					<Grid item xs={3} className={classes.ButtonItem}>
						<img src={process.env.PUBLIC_URL+"/logos/GitHubBlack.png"} className={classes.ButtonLogo}/>
					</Grid>
					<Grid item xs={8} className={classes.ButtonItem}>
						<Typography variant="button" className={classes.ButtonText}>{props.text}</Typography>
					</Grid>
				</Grid>
			</Button>

	);

}