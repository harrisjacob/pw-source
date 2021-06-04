import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import contentStyle from "../subcomponents/contentStyle";
import GithubButton from '../subcomponents/GithubButton';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({

	skyHook: {
		width:"100%",
		paddingTop: "5px",
		paddingBottom: "5px",
		paddingRight: "5px",
		paddingLeft: "5px",
		backgroundColor : theme.palette.text.secondary,
	},
	introCont:{
		alignItems:"center",
	},
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
		paddingTop: "5px",
		paddingBottom: "5px",
		paddingRight: "5px",
		paddingLeft: "5px",
		backgroundColor : theme.palette.text.secondary,
	}, 
	contentStart:{
		marginTop: "-20%",
	},
	imageGalleryContainer: {
		backgroundColor : "white",
	},
	mayaGallery: {
		paddingTop: "5px",
		paddingBottom: "5px",
		paddingRight: "5px",
		paddingLeft: "5px",
		backgroundColor : theme.palette.text.secondary,
	},
	mudboxGallery: {
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
	imgCaption:{
		textAlign: "center",
	},
}));


export default function Skyhook(){

	const classes = useStyles();
	const commonStyle = contentStyle();

	const smoothedImages = [
		{
			original: 'https://i.ibb.co/m4TVGd2/smooth01.jpg',
			thumbnail: 'https://i.ibb.co/m4TVGd2/smooth01.jpg',
		},
		{
			original: 'https://i.ibb.co/HDKWrm9/smooth02.jpg',
			thumbnail: 'https://i.ibb.co/HDKWrm9/smooth02.jpg',
		},
		{
			original: 'https://i.ibb.co/gwDGRpM/smooth03.jpg',
			thumbnail: 'https://i.ibb.co/gwDGRpM/smooth03.jpg',
		},
		{
			original: 'https://i.ibb.co/R0p4Cp8/smooth04.jpg',
			thumbnail: 'https://i.ibb.co/R0p4Cp8/smooth04.jpg',
		},
		{
			original: 'https://i.ibb.co/QNhrnk3/smooth-Front.jpg',
			thumbnail: 'https://i.ibb.co/QNhrnk3/smooth-Front.jpg',
		},
		{
			original: 'https://i.ibb.co/wLS07RK/smooth-Top.jpg',
			thumbnail: 'https://i.ibb.co/wLS07RK/smooth-Top.jpg',
		},
		{
			original: 'https://i.ibb.co/ts0GxvD/smooth-Side.jpg',
			thumbnail: 'https://i.ibb.co/ts0GxvD/smooth-Side.jpg',
		},
	];

	const images = [
  		{
    		original: 'https://i.ibb.co/Gp5mtrs/Front-B.png',
    		thumbnail: 'https://i.ibb.co/Gp5mtrs/Front-B.png',
  		},
  		{
    		original: 'https://i.ibb.co/b1Cxhvk/Back-B.png',
    		thumbnail: 'https://i.ibb.co/b1Cxhvk/Back-B.png',
  		},
  		{
    		original: 'https://i.ibb.co/5MWmz5Q/Top-B.png',
    		thumbnail: 'https://i.ibb.co/5MWmz5Q/Top-B.png',
  		},
  		{
    		original: 'https://i.ibb.co/SXT6T79/Bottom-B.png',
    		thumbnail: 'https://i.ibb.co/SXT6T79/Bottom-B.png',
  		},
  		{
    		original: 'https://i.ibb.co/q05Jj3q/Left-B.png',
    		thumbnail: 'https://i.ibb.co/q05Jj3q/Left-B.png',
  		},
  		{
    		original: 'https://i.ibb.co/569YpLQ/Right-B.png',
    		thumbnail: 'https://i.ibb.co/569YpLQ/Right-B.png',
  		},


  		{
    		original: 'https://i.ibb.co/mF2rhLZ/Bottom-Engraving.png',
    		thumbnail: 'https://i.ibb.co/mF2rhLZ/Bottom-Engraving.png',
  		},
  		{
    		original: 'https://i.ibb.co/D7yRjVW/Case-Closeup.png',
    		thumbnail: 'https://i.ibb.co/D7yRjVW/Case-Closeup.png',
  		},
  		{
    		original: 'https://i.ibb.co/FsvmRGT/Claw-02.png',
    		thumbnail: 'https://i.ibb.co/FsvmRGT/Claw-02.png',
  		},
  		{
    		original: 'https://i.ibb.co/4ZnNmhS/Claw-01.png',
    		thumbnail: 'https://i.ibb.co/4ZnNmhS/Claw-01.png',
  		},
  		{
    		original: 'https://i.ibb.co/Rztk8LS/Grain-Of-The-Wood.png',
    		thumbnail: 'https://i.ibb.co/Rztk8LS/Grain-Of-The-Wood.png',
  		},
  		{
    		original: 'https://i.ibb.co/8r6dbp6/Handle-01.png',
    		thumbnail: 'https://i.ibb.co/8r6dbp6/Handle-01.png',
  		},
  		{
    		original: 'https://i.ibb.co/tD5Xq94/Leather.png',
    		thumbnail: 'https://i.ibb.co/tD5Xq94/Leather.png',
  		},
  		{
    		original: 'https://i.ibb.co/s288GyL/LogCut.png',
    		thumbnail: 'https://i.ibb.co/s288GyL/LogCut.png',
  		},
  		{
    		original: 'https://i.ibb.co/3sRcdWy/Upper-Logo.png',
    		thumbnail: 'https://i.ibb.co/3sRcdWy/Upper-Logo.png',
  		},
	];

	return(
			<div>
			<Typography variant="h2"className={commonStyle.ProjectTitle}>Bioshock Infinite: Skyhook</Typography>
				
				<div className={classes.playerWrapper}>
					<ReactPlayer
						url="https://vimeo.com/558816111"
						controls={false}
						muted={true}
						playing={true}
						width='60%'
						height='60%'
						loop={true}
						className={classes.reactPlayer}
					/>
				</div>
				
				<Grid container spacing={10} className={[commonStyle.projStages, classes.contentStart]}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: Advanced 3D Digital Production for Animation and Video Games</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Professor: Jeffery Spoonhower</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Spring 2021</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText}>
						For the final project of the Advanced 3D digital production course, we were given the option to create an object or prop, set or environment, character model, or character animation.  I knew I wanted to model an object as it would give me some practice in both Maya and Mudbox.  My interest in the design of video game assets focused my brainstorm on items from a couple game series that I had played through over the past couple years. I toyed around with the idea of modelling a couple different objects including the portal gun from the Portal, the Jackdaw from Assassin’s Creed IV: Black Flag, and the giant bust of Andrew Ryan inside the lighthouse at the beginning of Bioshock.  In the end I decided on the Skyhook from Bioshock Infinite for a couple reasons.  First, when working in the lab, I would always sit next to a giant Bioshock Infinite poster, so the game was often literally in front of me.  After doing some research online into many of the potential projects, I found that the reference images for the Skyhook were both more easily available and showed more detail compared to some of the other assets.  Finally, the Skyhook seemed to combine many contrasting modeling concepts.  The geometry is both rigid and curved.  The texture of the hard metal stands out from that of the cracked leather or grainy wood.  The normally industrial looking tool is covered in engravings and damage from use.  For these reasons, I felt that the Skyhook posed a challenge suitable for the requirements of this project.
						</Typography>
					</Grid>

					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" align="right" className={commonStyle.SubTitle}>Background</Typography>
						<br />
						<Grid container spacing={10} className={classes.introCont}>
							<Grid conatiner item xs={4}>
								<Grid item xs={12}>
									<img src="https://i.ibb.co/B2Rkbcz/police-skyhook.png" alt="police-skyhook" className={classes.skyHook}/>
								</Grid>
								<Grid item xs={12} className={classes.imgCaption}>
									<Typography color="textPrimary" align="center" variant="caption">
										Police using Skyhooks to ride the Sky-Lines, Bioshock Infinite
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={8}>
								<Typography color="textPrimary" className={commonStyle.bodyText}>
								In Bioshock Infinite, the Skyhook is a tool used by the player (and NPCs) to move between the floating islands of Colombia. The curved hooks allow the player to latch onto the Sky-Lines for quick travel around an island during a chapter or to take the player to a new island as the story progresses. The Skyhook is also the first weapon (and only melee weapon) given to the player throughout the game.  Its mode of attack is dependent on the player’s position relative to their target.  Pulling the trigger causes the rotary motor to spin the bladed scoops ensuring that the player catches a rail or performs a gory execution. For more information visit the&nbsp;
								<a href="https://bioshock.fandom.com/wiki/Sky-Hook">Skyhook Wiki page</a>
								.
								</Typography>
							</Grid>

						</Grid>
					</Grid>


					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Maya</Typography>
						<br />
						<Grid container spacing={10} className={classes.introCont}>
							<Grid item xs={6}>
								<Typography color="textPrimary" className={commonStyle.bodyText}>
								Maya was first used to block out the overall geometry of the Skyhook.  My reference images were fairly consistent in their proportions and detail, so I was able to model using each of the orthographic views.  For details hidden from these views, Bioshock Infinite concept art, fan art, and captures from the game itself were explored.  One approach to modelling that I picked up in my 3D digital production classes is to visualize how the system of components would actually function if it were implemented in real life.  Using this method, I was able to model each piece based on how I believed that piece was utilized in the Skyhook’s design.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<div className={classes.mayaGallery}>
									<div className={classes.imageGalleryContainer}>
										<ImageGallery items={smoothedImages} className={classes.mayaGallery}/>
									</div>
								</div>
							</Grid>

						</Grid>
					</Grid>

					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary"  align="right" className={commonStyle.SubTitle}>Mudbox</Typography>
						<br />
					
						<Grid container spacing={10} className={classes.introCont}>
							<Grid item xs={12}>
								<Typography color="textPrimary" className={commonStyle.bodyText}>
								The model was brought into Mudbox for texture painting and fine detail sculpting.  Texture painting used images for the wood, metal, and leather surfaces as well as basic colors such as those used on the strap stitching.  Using Mudbox’s sculpting tools allowed for some of the smaller details including the metal scratches, raised stitches, grip design and decoration, and wooden granularity to be created.  Highlights were added to the scratches in the metal to reduce their subtly and give the impression of an exposed subsurface in the metal. A combination of stamps sourced from reference images and files I created in Photoshop were used for these details as well as the engravings and reliefs that decorate the weapon.
								</Typography>
							</Grid>
							<Grid item xs={12} className={commonStyle.Section}>
								<div className={classes.mudboxGallery}>
									<div className={classes.imageGalleryContainer}>
										<ImageGallery items={images}/>
									</div>
								</div>
							</Grid>
						</Grid>
					
					</Grid>
				</Grid>

			</div>
	);
}