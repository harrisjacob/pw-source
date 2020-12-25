import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	banner: {
		marginTop:'15%',
		marginBottom:'15%',
		textAlign:"center",
		backgroundColor: 'rgba(255,255,255,0.1)'
	},
	bannerText:{
		fontFamily: 'Fjalla One, sansSerif',
		fontSize: '3rem',
		color: 'white',
	},
}));


export default function ComingSoon(){

	const classes = useStyles();


	return(
			<div className={classes.banner}>
				<Typography className={classes.bannerText}>Coming Soon</Typography>
			</div>
	);
}