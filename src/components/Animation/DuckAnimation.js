import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	playerWrapper: {
		position: 'relative',
		paddingTop: '56.25%',
		marginTop: '2%',
		height: "56.25"
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
	}
}));


export default function DuckAnimation(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
				<Typography variant="h2" className={commonStyle.ProjectTitle}> Rubber Duck Animation</Typography>
				<div className={classes.playerWrapper}>
					<ReactPlayer
						url="https://www.youtube.com/watch?v=6R9Xqhx9MEY&feature=youtu.be"
						controls={true}
						width='60%'
						height='60%'
						className={classes.reactPlayer}
					/>
				</div>
				<Grid container spacing={10} className={[commonStyle.projStages, classes.contentStart]}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: 3D Digital Production for Animation and Video Games</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Professor: Jeffery Spoonhower</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Fall 2020</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText} > For this project we were tasked with selecting a real world object to take through the animation process.  I had previously used Autodesk Maya for smaller projects, but this was my first experience with the software in a classroom setting.  For my object, I chose a rubber duck (used for debugging) that I had sitting around the apartment, as it provided a comfortable balance between its difficulty to model and its potential for action within the scene. While its production timeline was only the three weeks leading up to the end of the semester, the project combined concepts covered throughout the class. These concepts came through experimentation during guided tutorial in lab and weekly screenings and review of influential digital productions. Stages of our animation pipeline included modeling, texturing, rigging, animating, lighting, “shooting”, rendering, and post-processing.
</Typography>
					</Grid>
				</Grid>
			</div>
	);
}