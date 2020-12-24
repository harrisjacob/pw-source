import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/general/Home';
import Compiler from './components/school/Compiler';
import DuckAnimation from './components/school/DuckAnimation';
import NdFootballDatabase from './components/school/NdFootballDatabase';
import WebServer from './components/school/WebServer';
import Algorithms from './components/independent/Algorithms';
import MiniShell from './components/independent/MiniShell';
import SodukuSolver from './components/independent/SodukuSolver';
import About from './components/general/About';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme.js"
import Grid from "@material-ui/core/Grid";
import Footer from './components/subcomponents/Footer';
import SiteNav from './components/subcomponents/SiteNav';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		display: 'flex',
		flexDirection: 'column',
		minHeight:'100vh',
		width: '100%',
		overflowY: 'scroll',
		overflowX: 'hidden',
	},
	contentWrap: {
		flex:1,
		width: '100%',
		backgroundColor: '#1F2833',
		//backgroundImage: "url('../../static/images/lowpoly2.png')",
		//backgroundSize: 'cover',
	},
	customDivider: {
    	marginTop: '1%',
    	marginBottom: '1%',
    	height: "3px",
    	backgroundColor: '#66FCF1',
  },
  header: {
  	placeContent:"center",
  }
}));


export default function App() {
  
	const classes = useStyles();

  	return (<Router>
			<ThemeProvider theme={theme}>
			<div className={classes.pageContainer}>
				<div className={classes.contentWrap}>
					<Grid container className={classes.header}>
						<Grid item xs={8}>
							<SiteNav />
						</Grid>
						<Grid item xs={10}>
							<Divider className={classes.customDivider}/>
						</Grid>
					</Grid>								
		            <Switch>
						<Route exact path="/compiler" component={Compiler} />
						<Route exact path="/duck-animation" component={DuckAnimation} />						
						<Route exact path="/nd-football-db" component={NdFootballDatabase} />
						<Route exact path="/web-server" component={WebServer} />
						<Route exact path="/soduku-solver" component={SodukuSolver} />
						<Route exact path="/algorithms" component={Algorithms} />
						<Route exact path="/mini-shell" component={MiniShell} />
						<Route exact path="/about" component={About} />
			            <Route exact path="/" component={Home} />
		            </Switch>
				</div>
				<Footer />
			</div>
			</ThemeProvider>
		</Router>
			);

}

