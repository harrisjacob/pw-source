import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

import ComingSoon from '../subcomponents/ComingSoon';


const useStyles = makeStyles((theme) => ({
	imgGallery: {
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
				
				<Grid container spacing={10} className={commonStyle.projStages}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: Advanced 3D Digital Production for Animation and Video Games</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Professor: Jeffery Spoonhower</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Spring 2021</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText}>

						</Typography>
					</Grid>
					<Grid item xs={12} className={commonStyle.Section}>
						<div className={classes.imgGallery}>
							<div className={classes.imageGalleryContainer}>
								<ImageGallery items={pulseRifleImages}/>
							</div>
						</div>
					</Grid>

				</Grid>

			</div>
	);
}