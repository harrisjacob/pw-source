import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

import ComingSoon from '../subcomponents/ComingSoon';


const useStyles = makeStyles((theme) => ({
	imgFormat: {
		width:"60%",
		height: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		paddingTop: "5px",
		paddingBottom: "5px",
		paddingRight: "5px",
		paddingLeft: "5px",
		backgroundColor : theme.palette.text.secondary,
	},
	imageGalleryContainer: {
		backgroundColor : "white",
	},
	movieImageCont: {
		textAlign: "center",
	},
	imgCaption:{
		textAlign: "center",
	},
	preContent:{
		marginTop: '2%',
	}
}));


export default function PulseRifle(){

	const classes = useStyles();
	const commonStyle = contentStyle();

	const pulseRifleImages = [
		{
			original: 'https://i.ibb.co/5RNGjGG/IMG-5905.jpg',
			thumbnail: 'https://i.ibb.co/5RNGjGG/IMG-5905.jpg',
		},
		{
			original: 'https://i.ibb.co/xhtVB38/IMG-5907.jpg',
			thumbnail: 'https://i.ibb.co/xhtVB38/IMG-5907.jpg',
		},
		{
			original: 'https://i.ibb.co/PF9vNMR/IMG-5906.jpg',
			thumbnail: 'https://i.ibb.co/PF9vNMR/IMG-5906.jpg',
		},
		{
			original: 'https://i.ibb.co/C0nPs5G/IMG-5908.jpg',
			thumbnail: 'https://i.ibb.co/C0nPs5G/IMG-5908.jpg',
		},
	];

	return(
			<div>
				<Typography variant="h2"className={commonStyle.ProjectTitle}>Aliens: Pulse Rifle</Typography>
					
				<Grid conatiner className={classes.preContent}>
					<Grid item xs={12} className={classes.movieImageCont}>
						<img src="https://i.ibb.co/jzZXTtf/pulse-rifle.jpg" alt="pulse-rifle" border="0" className={classes.imgFormat}/>
					</Grid>
					<Grid item xs={12} className={classes.imgCaption}>
						<Typography color="textPrimary" align="center" variant="caption">
							Lt. Ripley (Sigourney Weaver) holding the M41A Pulse Rifle
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={5} className={commonStyle.projStages}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: Advanced 3D Digital Production for Animation and Video Games</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Professor: Jeff Spoonhower</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Spring 2021</Typography>
						<br />
						<div className={classes.imgFormat}>
							<div className={classes.imageGalleryContainer}>
								<ImageGallery items={pulseRifleImages}/>
							</div>
						</div>
					</Grid>

					<Grid item xs={12} className={commonStyle.Section}>
						<Typography color="textPrimary" className={commonStyle.bodyText}>
						We were tasked with creating a high-resolution, hard surface model of the M41A Pulse Rifle from the movie Aliens. This guided modelling process was intended to develop my understanding of high poly modelling and general modelling workflows in Maya. This type of model could be used in various digital production industries, including game development, visual FX, or film.
						</Typography>
					</Grid>

				</Grid>
			</div>
	);
}