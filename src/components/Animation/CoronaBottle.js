import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

import ComingSoon from '../subcomponents/ComingSoon';


const useStyles = makeStyles((theme) => ({
	imgFormat:{
		maxWidth:'100%',
	},
	MainImgContainer:{
		width: '60%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '2%',
		marginTop: '2%',
	},
}));


export default function CoronaBottle(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
				<Typography variant="h2"className={commonStyle.ProjectTitle}>Corona Bottle</Typography>
				
				<div className={classes.MainImgContainer}>
					<img src="https://i.ibb.co/z6QnP0S/Corona-Render1080p.jpg" alt="Corona-Render1080p" border="0" className={classes.imgFormat}/>
				</div>
				<Grid container spacing={10} className={commonStyle.projStages}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: Technical Concepts of Visual Effects</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Professor: John Slaughter</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Spring 2021</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText}>
							The goal of this project was to model and render a drink of our choosing.  I decided to use bottled Corona as my inspiration because it provided an appropriate level of difficulty given the project's time frame and has always reminded me of the beaches back home.  Although its contribution to the scene is small, the bottle cap took by far the longest to model as I wanted to try to reproduce the ridges and teeth as close to the source as I could. All models used in this render are original.  The Corona logo, lime texture, wood texture, and HDRI were sourced from various free-use locations online. 
						</Typography>
					</Grid>
				</Grid>
				<div className={classes.MainImgContainer}>
					<img src="https://i.ibb.co/zFJ2f8P/Corona-Cap-Front1080p.jpg" alt="Corona-Cap-Front1080p" border="0" className={classes.imgFormat}/>
				</div>
			</div>
	);
}