import React from 'react';
import Grid from "@material-ui/core/Grid";
import FooterButton from './FooterButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFooter: {
  	color: 'white',
  	backgroundColor: theme.palette.secondary.main,
  	paddingTop: '1em',
  	paddingBottom: '1em',
  	position: 'relative',
  	bottom: 0,
  	width: '100%',
  },
  buttonContainer: {
  	textAlign:'center',
  },
  copyrightText:{
  	fontFamily: 'Fjalla One, sansSerif',
  }
}));


export default function Footer(){

	const classes = useStyles();

	const githubProp = {
		link: 'http://github.com/harrisjacob',
		logo: '/logos/GitHubWhite.PNG',
	}

	const linkdinProp = {
		link: 'https://www.linkedin.com/in/harris-jake/',
		logo: '/logos/LinkedIn.PNG',
	}

	return(<div className={classes.mainFooter}>
			<Grid container className={classes.buttonContainer}>
				<Grid item xs={12} className={classes.copyrightText}>
					&copy; {new Date().getFullYear()} Jacob Harris
				</Grid>
				<Grid item xs={12}>
					<FooterButton payload={githubProp} />
					<FooterButton payload={linkdinProp} />
				</Grid>
			</Grid>
		   </div>
	);
}