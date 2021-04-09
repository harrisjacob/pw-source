import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

import ComingSoon from '../subcomponents/ComingSoon';


const useStyles = makeStyles((theme) => ({

}));


export default function PulseRifle(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
				<ComingSoon />
			</div>
	);
}