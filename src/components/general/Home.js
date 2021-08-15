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
    fontSize: '4rem',
  	fontFamily: 'Raleway, sansSerif',
    backgroundImage: 'linear-gradient(#66FCF1 70%, #1F2833 90%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    color: "transparent",

  },
  HelloBox: {
  	marginTop: '5%',
  	marginBottom: '5%',
    minHeight: '360px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10%',
      marginBottom: '10%',
      minHeight: '240px'
    },

  },
  myName:{
    //backgroundImage: 'linear-gradient(#FFFFFF 70%, #1F2833 90%)',
    backgroundImage: 'linear-gradient(#66FCF1 70%, #1F2833 90%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    color: "transparent",
    fontSize: "12vh",
    [theme.breakpoints.down('sm')]: {
      fontSize: "7.5vh",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "6vh",
    },
    fontFamily: 'Raleway, sansSerif',
  },

  introText:{
    //fontSize: "1.1rem",
    fontSize: "2vh",
    fontFamily: 'Raleway, sansSerif',
    marginTop:"2%",
    marginBottom:"2%",
    color: "white",
  },
  headShot:{
    width: "90%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  WelcomeContent:{
    justifyContent: "center",
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
          <Grid item lg = {6} md = {12} containe spacing={3}>
      			<Grid item xs={12} className={classes.HelloBox}>
              <Slide direction="up" in={true} timeout={800} onEntered={handleChange}>
                <div>
                  <Fade in={true} timeout={2000}>
                    <Typography variant="h1" display="block" className={classes.HelloText}>
                      Hello,
          				  </Typography>
                  </Fade>
                </div>
              </Slide>
               <Slide direction="up" in={nameDelay} timeout={800}>
                <div>
                  <Fade in={true} style={{transitionDelay: '300ms'}} timeout={1000}>
            				<Typography variant="h1" display="block" className={classes.myName}>
            					I'm Jake Harris
            				</Typography>
                  </Fade>
                </div>
              </Slide>

              <Fade in={true} style={{transitionDelay: '2000ms'}} timeout={2000}>
                <div>
                <Typography variant="body2" className={classes.introText}>
                  I graduated from the University of Notre Dame in the Spring of 2021.  Throughout my undergraduate career, I studied computer science with a concentration in media computing. I found this path particularly attractive because of its focus on creating tools and visuals that others could use and enjoy.
                </Typography>
                <Typography variant="body2" className={classes.introText}>
                  Programming projects for coursework and fun are done primarily in C, C++, and Python, but I have experience, as you will see, with many other languages.  I have been working in Autodesk Maya for a little over 2 years, creating both hard surface and organic models, experimenting with different animation styles, and generally exploring the multitude of features the program has to offer.  Given my educational background and independent projects, I’m pursuing careers as a software engineer, systems developer, or technical director.
                </Typography>
                <Typography variant="body2" className={classes.introText}>
                  Use the navigation menu above to explore some of my projects or check out my resume. Enjoy!
                </Typography>
                </div>            
              </Fade>

      			</Grid>

      		</Grid>
          <Hidden mdDown>
          <Grid item lg={4} className={classes.headShotCont}>

            <Fade in={true} style={{transitionDelay: '2000ms'}} timeout={2000}>
              <div className={classes.headShotBox}>
                <img src={process.env.PUBLIC_URL+ "/images/headShot.PNG"} alt="thisisMe" className={classes.headShot}/>
              </div>
            </Fade>

          </Grid>
          </Hidden>
        </Grid>
  );
}