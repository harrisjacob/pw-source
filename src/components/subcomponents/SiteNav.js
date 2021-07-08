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
  	[theme.breakpoints.down('sm')]: {
			fontSize: "2vw",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "1vw"
    },
    alignSelf: "center"
  },
  ButtonLink: {
  	textDecoration: "none",
  },
  buttonFormat: {
  	 alignSelf: "center",
  },
  buttonObj: {
  	minWidth: "0px",
  }

}));



export default function SiteNav() {

	const classes = useStyles();

	return (<Grid container spacing={3} justify="center" className={classes.NavForm}>
				<Grid item xs={3} align="center" className={classes.buttonFormat}>
					<Button to="/" component={Link}  style={{minWidth: '0px'}}>
						<Typography variant="button" display="block" className={classes.ButtonText}>
						Home
						</Typography>
					</Button>
				</Grid>

				<Grid item xs={3} align="center" className={classes.buttonFormat}>
					<Dropdown className={classes.dropdown} type="CompSci" />
				</Grid>
				<Grid item xs={4} align="center" className={classes.buttonFormat}>
					<Dropdown className={classes.dropdown} type="ModelAndAnim" />
				</Grid>

				<Grid item xs={2} align="center" className={classes.buttonFormat}>
					<Button  style={{minWidth: '0px'}}>
						<a href="./assets/Jake Harris Resume.pdf" target="_blank" className={classes.ButtonLink}>
							<Typography variant="button" display="block" className={classes.ButtonText}>
								Resume
							</Typography>
						</a>
					</Button>
				</Grid>

			</Grid>
			);
	
}


