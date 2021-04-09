import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import contentStyle from "../subcomponents/contentStyle";
import GithubButton from '../subcomponents/GithubButton';

const useStyles = makeStyles((theme) => ({

}));


export default function MiniShell(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
				<Typography variant="h2"className={commonStyle.ProjectTitle}>Mini Shell</Typography>
				<Grid container spacing={10} className={commonStyle.projStages}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography variant="body1" color="textPrimary" className={commonStyle.bodyText}>The objective of this project was to create a rudimentary shell written in C.  At the time I began this project, I had just finished reading Brian Kernighan and Dennis Richie's <i>The C Programming Langauge</i> (K&R) and wanted a way to practice some of the concepts found within its chapters. While many of the topics had been covered in previsouly taken classes,   </Typography>
						<div className={commonStyle.MasterButtonContainer}>
							<GithubButton link="https://github.com/harrisjacob/My-Shell" text="Mini Shell"/>
						</div>
					</Grid>
				</Grid>
			</div>
	);
}