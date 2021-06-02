import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import contentStyle from "../subcomponents/contentStyle";
import GithubButton from '../subcomponents/GithubButton';
import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles((theme) => ({
}));


export default function Skyhook(){

	const classes = useStyles();
	const commonStyle = contentStyle();

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
				
				<Grid container spacing={10} className={commonStyle.projStages}>
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
				</Grid>

				<ImageGallery items={images} />
			</div>
	);
}