import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ComingSoon from '../subcomponents/ComingSoon';

const useStyles = makeStyles((theme) => ({
	ProjectTitle: {
		marginTop: '2%',
		color: 'white',
		[theme.breakpoints.down('xs')]: {
	 		fontSize: '2rem',
		
    	},
	},
}));


export default function DuckAnimation(){

	const classes = useStyles();


	return(
			<div>
				<Typography variant="h2"className={classes.ProjectTitle}>Duck Animation</Typography>
				<ComingSoon />
			</div>
	);
}