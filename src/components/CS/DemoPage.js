import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import contentStyle from "../subcomponents/contentStyle";

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