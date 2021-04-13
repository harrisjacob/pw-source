import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

import ComingSoon from '../subcomponents/ComingSoon';


const useStyles = makeStyles((theme) => ({
	playerWrapper: {
		position: 'relative',
		paddingTop: '56.25%',
		marginTop: '2%',
		height: "56.25",
		marginBottom:"-20%",
	},
	reactPlayer: {
		position: 'absolute',
		top:0,
		left:0,
		right:0,
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
	}, 
	contentStart:{
		marginTop: "-20%",
	},
}));


export default function LuxoAnimation(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
				<Typography variant="h2" className={commonStyle.ProjectTitle}>Luxo Jr Animation</Typography>
				<div className={classes.playerWrapper}>
					<ReactPlayer
						url='./dynamic/LuxoJr_Animation.m4v'
						controls={true}
						width='60%'
						height='60%'
						className={classes.reactPlayer}
					/>
				</div>
				<Grid container spacing={10} className={[commonStyle.projStages, classes.contentStart]}>
					
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: Technical Concepts of Visual Effects</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Professor: John Slaughter</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Spring 2021</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText}>
						For the second project in my VFX class, we were asked to create an animation.  I have always loved seeing PIXAR's little lamp, Luxo Jr, bounce and squish the I in the company's logo before each of their movies and wanted to recreate it.  As a general disclaimer, I am not associated with PIXAR in any way but simply chose to use the logo and character as the focus of my project as both were influential to my interest in animation since childhood.  Instructions for the project only required that I animate an object, but I thought it would be an interesting exercise to create the model from scratch. As a result, I modeled and animated everything you see in the video.  Reference for the model came from the giant Luxo Jr statue found on Pixar’s campus.
						</Typography>
						<br />
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText}>
							I found that one of the most challenging aspects of this project was creating the springs.  While modeling the springs was fairly straightforward, they needed to deform realistically relative to the surrounding mechanical components.  The motion driving the lower two springs seemed to reflect that of a four-bar linkage mechanism, so I consulted some mechanical engineering friends for help.  In the end, the simplest solution I found didn’t require any math on my part. Instead, the spring effect could be created by simply combining the use of an aim constraint on an IK-handle with driven keys and basic expressions.
						</Typography>
					</Grid>

				</Grid>
				<div className={classes.playerWrapper}>
					<ReactPlayer
						url='https://youtu.be/9FIK_gCCp-A'
						controls={true}
						width='60%'
						height='60%'
						className={classes.reactPlayer}
					/>
				</div>
			</div>
	);
} 