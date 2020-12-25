import React from 'react';
import Dropdown from './Dropdown';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dropdown: {
  	backgroundColor: 'rgba(52, 52, 52, 0.1)',	
  },
  NavForm: {
  	paddingTop:'5%'
  },
  ButtonText: {
  	color: theme.palette.gray.main,
  	fontFamily: 'Fjalla One, sansSerif',
  }
}));



export default function SiteNav() {

	const classes = useStyles();

	return (<Grid container spacing={3} justify="center" className={classes.NavForm}>
				<Grid item xs={3} align="center">
					<Button to="/" component={Link}>
						<Typography variant="button" display="block" className={classes.ButtonText}>
						Home
						</Typography>
					</Button>
				</Grid>
				<Grid item xs={3} align="center">
					<Dropdown className={classes.dropdown} type="School" />
				</Grid>
				<Grid item xs={3} align="center">
					<Dropdown type="Independent" />
				</Grid>
				<Grid item xs={3} align="center">
					<Button to="/about" component={Link}>
						<Typography variant="button" display="block" className={classes.ButtonText}>
						About
						</Typography>
					</Button>
				</Grid>
			</Grid>
			);
	
}


