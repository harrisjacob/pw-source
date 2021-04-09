import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fade from "@material-ui/core/Fade";
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


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
    minHeight: '360px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30%',
      marginBottom: '30%',
      minHeight: '240px'
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
      fontSize: '2.5rem',
    },


    fontFamily: 'Raleway, sansSerif',
  },
  headShot:{
    maxWidth: "60%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
  },
  WelcomeContent:{
    height: "100px",
  },
  headShotCont:{
    display:"flex",
    alignItems:"center",
  },
  headShotBox:{
    maxHeight: "500%"
  },
}));



export default function Home(){

	const classes = useStyles();
  const [nameDelay, setNameDelay] = React.useState(false);

  const handleChange = () => {
    setNameDelay((prev) => !prev);
  };

	return(<Grid container spacing={0} className={classes.WelcomeContent}>
          <Grid item lg = {6} md = {12} container spacing={3}>
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
            					I'm Jake Harris
            				</Typography>
                  </Fade>
                </div>
              </Slide>
      			</Grid>
      		</Grid>
          <Hidden mdDown>
          <Grid item lg={6} className={classes.headShotCont}>

            <Fade in={true} style={{transitionDelay: '1100ms'}} timeout={1000}>
              <div className={classes.headShotBox}>
                <img src={process.env.PUBLIC_URL+ "/images/headShot.PNG"} alt="thisisMe" className={classes.headShot}/>
              </div>
            </Fade>

          </Grid>
          </Hidden>
        </Grid>
  );
}