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
		width:"60%",
		height: "auto",
		marginLeft: "auto",
		marginRight: "auto",
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
    		original: './images/Skyhook/Orthos/Front_B.png',
    		thumbnail: './images/Skyhook/Orthos/Front_B.png',
  		},
  		{
    		original: './images/Skyhook/Orthos/Back_B.png',
    		thumbnail: './images/Skyhook/Orthos/Back_B.png',
  		},
  		{
    		original: './images/Skyhook/Orthos/Top_B.png',
    		thumbnail: './images/Skyhook/Orthos/Top_B.png',
  		},
  		{
    		original: './images/Skyhook/Orthos/Bottom_B.png',
    		thumbnail: './images/Skyhook/Orthos/Bottom_B.png',
  		},
  		{
    		original: './images/Skyhook/Orthos/Left_B.png',
    		thumbnail: './images/Skyhook/Orthos/Left_B.png',
  		},
  		{
    		original: './images/Skyhook/Orthos/Right_B.png',
    		thumbnail: './images/Skyhook/Orthos/Right_B.png',
  		},


  		{
    		original: './images/Skyhook/Mud_Details/Bottom_Engraving.png',
    		thumbnail: './images/Skyhook/Mud_Details/Bottom_Engraving.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/Case_Closeup.png',
    		thumbnail: './images/Skyhook/Mud_Details/Case_Closeup.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/Claw_02.png',
    		thumbnail: './images/Skyhook/Mud_Details/Claw_02.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/Claw_01.png',
    		thumbnail: './images/Skyhook/Mud_Details/Claw_01.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/GrainOfTheWood.png',
    		thumbnail: './images/Skyhook/Mud_Details/GrainOfTheWood.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/Handle_01.png',
    		thumbnail: './images/Skyhook/Mud_Details/Handle_01.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/Leather.png',
    		thumbnail: './images/Skyhook/Mud_Details/Leather.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/LogCut.png',
    		thumbnail: './images/Skyhook/Mud_Details/LogCut.png',
  		},
  		{
    		original: './images/Skyhook/Mud_Details/Upper_Logo.png',
    		thumbnail: './images/Skyhook/Mud_Details/Upper_Logo.png',
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
							<Grid item xs={4}>
								<img src="https://i.ibb.co/B2Rkbcz/police-skyhook.png" alt="police-skyhook" className={classes.skyHook}/>
							</Grid>
							<Grid item xs={8}>
								<Typography color="textPrimary" className={commonStyle.bodyText}>
								In Bioshock Infinite, the Skyhook is a tool used by the player (and NPCs) to move between the floating islands of Colombia. The curved hooks allow the player to latch onto the Sky-Rails for quick travel around an island during a chapter or to take the player to a new island as the story progresses. The Skyhook is also the first weapon (and only melee weapon) given to the player throughout the game.  Its mode of attack is dependent on the player’s position relative to their target.  Pulling the trigger causes the rotary motor to spin the bladed scoops ensuring that the player catches a rail or performs a gory execution. For more information visit the&nbsp;
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
								
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<ImageGallery items={smoothedImages} originalWidth="100%"/>
							</Grid>

						</Grid>
					</Grid>

					<Grid item xs={12} className={commonStyle.Section}>
						<div className={classes.imageGalleryContainer}>
							<ImageGallery items={images}/>
						</div>
					</Grid>

				</Grid>

			</div>
	);
}