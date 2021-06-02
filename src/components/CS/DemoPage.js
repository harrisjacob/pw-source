import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import contentStyle from "../subcomponents/contentStyle";
import GithubButton from '../subcomponents/GithubButton';

const useStyles = makeStyles((theme) => ({
}));


export default function DemoPage(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
			</div>
	);
}