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


// <p>My name is Jacob Harris and I’m a senior at the University of Notre Dame studying Computer Science with a concentration in Media Computing.
// 				I’m interested in Systems Programming and Digital Production.</p>
// 				<p>Growing up in San Diego, California, I had the opportunity to work with Sports for Exceptional Athletes, a nonprofit organization that organized
// 				sporting and recreational activities for athletes with developmental disabilities.  While at Notre Dame, I was able to continue volunteerism in this 
// 				area by coaching the athletes of Notre Dame’s Special Olympics Club.</p>
// 				<p>My passion for working with others is not limited to sports extracurriculars.  While at university, I tutored Calculus I and Calculus III and was
// 				 a Teaching Assistant in the CSE Department for the Computer Architecture and Logic Design courses.  Outside of school, I interned as a software 
// 				 developer at Bricleir, a Silicon Valley based startup, where I implemented both administrative and customer facing features on Bricleir’s online
// 				 platform.</p>
// 				<p> The purpose of this site is to showcase some of the projects that I have worked on while I have been a student at Notre Dame.  The navigation 
// 				above separates my work into projects that were completed for classes and those that I have taken on in my free time.  I hope you enjoy!</p>


export default function About(){

	const classes = useStyles();


	return(
			<div>

				<Typography variant="h2"className={classes.ProjectTitle}>About</Typography>
				<ComingSoon />
				
			</div>
	);
}