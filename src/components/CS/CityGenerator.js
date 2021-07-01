import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import contentStyle from "../subcomponents/contentStyle";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
	}, 
	contentStart:{
		marginTop: "-20%",
	}
}));


export default function CityGenerator(){

	const classes = useStyles();
	const commonStyle = contentStyle();


	return(
			<div>
				<Typography variant="h2" className={commonStyle.ProjectTitle}>Maya City Generator</Typography>
				<div className={classes.playerWrapper}>
					<ReactPlayer
						url="https://youtu.be/Tddl0N6o-z0"
						controls={true}
						width='60%'
						height='60%'
						className={classes.reactPlayer}
					/>
				</div>
				<Grid container spacing={10} className={[commonStyle.projStages, classes.contentStart]}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Course: Independent Study</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Advisor: Jeff Spoonhower</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Taken: Spring 2021</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText} >
						The objective of this project was to build a tool in Maya that could be used to generate a city block by block.  I decided to do my semester of independent study in Maya after speaking with many of the Notre Dame alumni who currently work as Technical Directors/Artists at companies like Disney, DreamWorks, or Ubisoft.   This Python-based tool was developed to allow scene designers to quickly build large scale cities without having to place individual building or street components.
						</Typography>
					</Grid>

					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" align="right" className={commonStyle.SubTitle}>Use</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>
							The tool is divided into three main sections: transformation settings, attribute settings, and asset settings.  The transformation settings allow the user to move and rotate the block indicator (which signifies where the new city block will be built).  The snap to corner button allows the user to snap the indicator to the nearest city block corner.  This is accomplished by calculating the distance the indicator is from each existing corner in three dimensional space, then jumping to the corner corresponding to the smallest value found.  The remove existing blocks button will delete the building assets if the tool has been executed prior.
						</Typography>
						<br />
						<Typography color="textPrimary" className={commonStyle.bodyText}>
							The attribute settings allow the user to set the maximum and minimum heights of the buildings on the generated block as well as the length of the block itself.  In the current iteration of the tool, all blocks generated are square.  Finally, the assets settings allow the user to specify the directories the tool will use to build the city.  Artist should design individual components of a building, then place these components in the specified directories so that the tool can use the components to randomly generate buildings.
						</Typography>
					</Grid>
				</Grid>
			</div>
	);
}