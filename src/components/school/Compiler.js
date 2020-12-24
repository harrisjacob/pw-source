import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GithubButton from '../subcomponents/GithubButton';
import NdButton from '../subcomponents/NdButton';


const useStyles = makeStyles((theme) => ({
	imgFormat:{
		width:'100%',
	},
	imgCaption:{
		textAlign: "right",
		color: theme.palette.gray.main,
		paddingRight: '5%',
		fontFamily: 'Fjalla One, sansSerif',

		[theme.breakpoints.down('xs')]: {
	 		fontSize: '0.5rem',
		
    	},
	},
	ProjectTitle: {
		marginTop: '2%',
		color: 'white',
		[theme.breakpoints.down('xs')]: {
	 		fontSize: '2rem',
		
    	},
	},
	Section: {
		marginBottom: '2%',
	},
	SubTitle: {
		[theme.breakpoints.down('xs')]: {
	 		fontSize: '1.5rem',
    	},
	},
	bodyText:{
		[theme.breakpoints.down('xs')]: {
	 		fontSize: '1rem',
    	},
	},
	projStages:{
		marginTop:'2%',
		paddingRight: '5%',
		paddingLeft: '5%',
	},
	buttonGrid:{
		textAlign: "center",
	},
	References:{
		fontFamily: 'Roboto, sansSerif',
		[theme.breakpoints.down('xs')]: {
	 		fontSize: '0.5rem',
		
    	},
	},
}));


export default function Compiler(){

	const classes = useStyles();

	return(<div>
			<Typography variant="h2"className={classes.ProjectTitle}>B-Minor Compiler</Typography>
			<div>
				<img src={process.env.PUBLIC_URL+ "/images/compilerOverview.png"} className={classes.imgFormat}/>
				<div className={classes.imgCaption}>
					<a href="#reference">[1]</a>
				</div>
			</div>
			<Grid container spacing={10} className={classes.projStages}>
				
				<Grid item xs={12} className={classes.Section}>
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>Overview</Typography>
					<Typography variant="body1" color="textPrimary"  className={classes.bodyText}>Course: Compilers and Language Design</Typography>
					<Typography variant="body1" color="textPrimary"  className={classes.bodyText}>Instructor: Douglas Thain</Typography>
					<Typography variant="body1" color="textPrimary"  className={classes.bodyText}>Taken: Fall 2020</Typography>
					<br />
					<Typography variant="body1" color="textPrimary"  className={classes.bodyText} > The overall goal of the project is to build a complete compiler that accepts a high level language as input and produces working assembly code as output<a href="#reference"><sup>[2]</sup></a>. The language chosen for this project is a simplified version of C, called B-Minor. A description of the B-Minor syntax can be found in the references section of this page <a href="#reference"><sup>[3]</sup></a>. The compiler is broken into Scanner, Parser, Pretty-Printer, Typechecker, and Code Generation stages. Code for each stage is provided in the corresponding section.</Typography>
				</Grid>
				
				<Grid item xs={12} className={classes.Section}>
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>Scanner</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.bodyText} >The first stage of the compiler uses Flex Scanner Generator to group together characters from a plain text input into a sequence of tokens.  This is accomplished by simulating a finite automata through regular expression matching.</Typography>
					<div className={classes.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/Scanner" text="Scanner Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/scanner.html "text="Scanner Description"/>
					</div>
				</Grid>

				<Grid item xs={12} className={classes.Section}>
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>Parser</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.bodyText}>The second stage of the compiler uses Bison Parser Generator to group together tokens of the Scanner into statements and expressions using a defined context free grammar.</Typography>
					<div className={classes.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/Parser" text="Parser Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/parser.html "text="Parser Description"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={classes.Section}>
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>Pretty-Printer</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.bodyText}>The printer stage of the compiler uses the grammar rules of the parser to construct an abstract syntax tree (AST).  After it is constructed, the AST is traversed and the original B-minor input program is printed with consistent formatting.</Typography>
					<div className={classes.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/PrettyPrinter" text="Printer Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/printer.html "text="Printer Description"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={classes.Section}>
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>Typechecker</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.bodyText}>Due to COVID-19, the University of Notre Dame’s Fall 2020 semester schedule had to be modified, and as a result, this stage was split into a name resolution and a type checking stage. The name resolution stage traverses the AST, tracking variable and function declarations, and verifies that each identifier is used within a legal context.  The type checker determines the type of each element of the AST and ensures that the operations performed on each of these elements are allowed according to the B-minor syntax specifications.</Typography>
					<div className={classes.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/typecheck" text="Typechecker Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/typecheck.html" text="Typechecker Description"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={classes.Section}>
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>Code Generation</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.bodyText}>Due to COVID-19 semester rescheduling, the code generation unit was pushed until after the Fall 2020 semester had finished and would be offered as an optional unit in January 2021.  Therefore, the section will be updated as soon as the code is completed.</Typography>
				</Grid>

				<Grid item xs={12} className={classes.Section}>
					<a name="reference" />
					<Typography variant="h3" color="textSecondary" className={classes.SubTitle}>References</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.References}>
						1. <a href="https://www3.nd.edu/~dthain/compilerbook/compilerbook.pdf#chapter.2">https://www3.nd.edu/~dthain/compilerbook/compilerbook.pdf#chapter.2</a>
					</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.References}>
						2. <a href="https://www3.nd.edu/~dthain/compilerbook/chapterA.pdf">https://www3.nd.edu/~dthain/compilerbook/chapterA.pdf</a>
					</Typography>
					<Typography variant="body1" color="textPrimary" className={classes.References}>
						3. <a href="https://www3.nd.edu/~dthain/compilerbook/chapterB.pdf">https://www3.nd.edu/~dthain/compilerbook/chapterB.pdf</a>
					</Typography>
				</Grid>

			</Grid>
		</div>


	);
}