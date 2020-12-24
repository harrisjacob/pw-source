import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fade from "@material-ui/core/Fade";
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
  HelloText: {
  	//color: theme.palette.teal.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: '8rem',
    },
    fontSize: '12rem',
  	fontFamily: 'Raleway, sansSerif',
    backgroundImage: 'linear-gradient(#66FCF1 70%, #1F2833 90%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    color: "transparent",

  },
  HelloBox: {
  	marginTop: '10%',
  	marginBottom: '10%',
  	marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30%',
      marginBottom: '30%',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '35%',
      marginBottom: '35%',
    },
  },
  myName:{
    backgroundImage: 'linear-gradient(#C5C6C7 70%, #1F2833 90%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    color: "transparent",
    [theme.breakpoints.down('sm')]: {
      fontSize: '4.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
    },


    fontFamily: 'Raleway, sansSerif',
  },

}));



export default function Home(){

	const classes = useStyles();
  const [nameDelay, setNameDelay] = React.useState(false);

  const handleChange = () => {
    setNameDelay((prev) => !prev);
  };

	return(<Grid container spacing={3}>
			<Grid item xs={12} className={classes.HelloBox}>
        <Slide direction="up" in={true} timeout={800} onEntered={handleChange} mountOnEnter unmountOnExit>
          <div>
            <Fade in={true} timeout={2000}>
              <Typography variant="h1" display="block" className={classes.HelloText}>
                Hello
    				  </Typography>
            </Fade>
          </div>
        </Slide>
         <Slide direction="up" in={nameDelay} timeout={800} mountOnEnter unmountOnExit>
          <div>
            <Fade in={true} style={{transitionDelay: '300ms'}} timeout={1000}>
      				<Typography variant="h1" display="block" className={classes.myName}>
      					I'm Jacob Harris
      				</Typography>
            </Fade>
          </div>
        </Slide>
			</Grid>
		</Grid>
	);
}