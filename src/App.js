import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/general/Home';
import Compiler from './components/CS/Compiler';
import MiniShell from './components/CS/MiniShell';
import SudokuSolver from './components/CS/SudokuSolver';
import DemoPage from './components/CS/DemoPage';

import Skyhook from './components/Animation/Skyhook';
import DuckAnimation from './components/Animation/DuckAnimation';
import LuxoAnimation from './components/Animation/LuxoAnimation';
import PulseRifle from './components/Animation/PulseRifle';
import CharacterModel from './components/Animation/CharacterModel';
import CoronaBottle from './components/Animation/CoronaBottle';

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
		overflowY: 'hidden',
		overflowX: 'hidden',
	},
	contentWrap: {
		flex:1,
		width: '100%',
		backgroundColor: '#1F2833',
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
						<Route exact path="/sudoku-solver" component={SudokuSolver} />
						<Route exact path="/mini-shell" component={MiniShell} />
						<Route exact path="/luxo-animation" component={LuxoAnimation} />
						<Route exact path="/corona-bottle" component={CoronaBottle} />
						<Route exact path="/skyhook" component={Skyhook} />
						<Route exact path="/demo-page" component={DemoPage} />
			            <Route exact path="/" component={Home} />
		            </Switch>
				</div>
				<Footer />
			</div>
			</ThemeProvider>
		</Router>
			);

}

