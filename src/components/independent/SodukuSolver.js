import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ComingSoon from '../subcomponents/ComingSoon';
import ReactPlayer from "react-player";
import contentStyle from "../subcomponents/contentStyle";
import GithubButton from '../subcomponents/GithubButton';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
	playerWrapper: {
		position: 'relative',
		paddingTop: '100%',
	},
	reactPlayer: {
		position: 'absolute',
		top:0,
		textAlign: 'center',
	}, 
	UthText: {
		marginRight: '4%',
		[theme.breakpoints.down('sm')]: {
	 		marginLeft: '0%',
	 		marginBottom: '4%',
    	},
	},
	DemoText: {
		marginLeft: '4%',

		[theme.breakpoints.down('sm')]: {
	 		marginLeft: '0%',
	 		marginTop: '4%',
    	},
	},
	containerLayout: {
		alignItems: "center",
	},
	MasterButtonContainer: {
		textAlign: "center",
	},
}));


export default function SodukuSolver(){

	const classes = useStyles();
	const commonStyle = contentStyle();

	return(
			<div>
				<Typography variant="h2"className={commonStyle.ProjectTitle}>Soduku Solver</Typography>
				<Grid container spacing={10} className={commonStyle.projStages}>
					<Grid item xs={12} className={commonStyle.Section}>
						<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
						<Typography color="textPrimary" className={commonStyle.bodyText}>Since I was a kid, I have always enjoyed logic based riddles and games such as the Sudoku.  Although I’d like to think that I have enough experience to tackle any difficulty of these puzzles, every once in a while I’ll come across a Sudoku that I can’t seem to make any progress. The goal of this project is to create a Sudoku solver that takes user input via a GUI and will return a solution, if one exists.  I chose to do this project in Python mainly because I wanted to experiment with the PyGame modules.</Typography>
						<div className={classes.MasterButtonContainer}>
							<GithubButton link="https://github.com/harrisjacob/Sudoku" text="Soduku Solver"/>
						</div>
					</Grid>
					
					<Grid item xs={12} className={commonStyle.Section}>
						<Grid container spacing={0} className={classes.containerLayout}>
							
							<Grid item xs={12} md={4}>
								<div className={classes.playerWrapper}>
									<ReactPlayer 
										url='./dynamic/Sudoku_Demo.mp4' 
										muted={true} 
										playing={true} 
										loop={true} 
										width="100%" 
										height="100%"
										className={classes.reactPlayer}/>
								</div>
							</Grid>


							<Grid item xs={12} md={7} className={classes.DemoText}>
								<Typography color="textPrimary" className={commonStyle.bodyText}>Clicking a square allows the user to select which cell of the sudoku solver GUI they would like to edit.  If a number already occupies a selected cell, a new number can be assigned or the cell can be emptied with either the backspace or 0 keys. Pressing the enter key will execute the algorithm and display the result, if one exists.</Typography>
							</Grid>
							


						</Grid>
					</Grid>


					<Grid item xs={12} className={commonStyle.Section}>
						<Grid container spacing={0} className={classes.containerLayout}>
							
							<Grid item xs={12} md={7} className={classes.UthText}>
								<Typography color="textPrimary" className={commonStyle.bodyText}>The sudoku solver uses a recursive backtracking method to search for a solution.  As this is more of a brute force method of solving the puzzle, it is highly inefficient in terms of its time complexity (executing in O(N<sup>N<sup>2</sup>+1</sup>) time), but can guarantee a solution, if such a solution exists.</Typography>
							</Grid>
							
							<Grid item xs={12} md={4}>
								<div className={classes.playerWrapper}>
									<ReactPlayer 
										url='./dynamic/Sudoku_UTH.mp4' 
										muted={true} 
										playing={true} 
										loop={true} 
										width="100%" 
										height="100%"
										className={classes.reactPlayer}/>
								</div>
							</Grid>

						</Grid>
					</Grid>
				</Grid>
			</div>
	);
}