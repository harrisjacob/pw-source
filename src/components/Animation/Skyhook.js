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
				<ImageGallery items={images} />
			</div>
	);
}