import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GithubButton from '../subcomponents/GithubButton';
import NdButton from '../subcomponents/NdButton';
import contentStyle from "../subcomponents/contentStyle";

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
}));


export default function Compiler(){

	const classes = useStyles();
	const commonStyle = contentStyle();

	return(<div>
			<Typography variant="h2"className={commonStyle.ProjectTitle}>B-Minor Compiler</Typography>
			<div>
				<img src="https://i.ibb.co/YcngtKP/compiler-Overview.png" alt="compiler-Overview" border="0" className={classes.imgFormat}/>
				<div className={classes.imgCaption}>[1]</div>
			</div>
			<Grid container spacing={10} className={commonStyle.projStages}>
				
				<Grid item xs={12} className={commonStyle.Section}>
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Overview</Typography>
					<Typography variant="body1" color="textPrimary"  className={commonStyle.bodyText}>Course: Compilers and Language Design</Typography>
					<Typography variant="body1" color="textPrimary"  className={commonStyle.bodyText}>Professor: Douglas Thain</Typography>
					<Typography variant="body1" color="textPrimary"  className={commonStyle.bodyText}>Taken: Fall 2020</Typography>
					<br />
					<Typography variant="body1" color="textPrimary"  className={commonStyle.bodyText} > The overall goal of the project is to build a complete compiler that accepts a high level language as input and produces working assembly code as output<sup>[2]</sup>. The language chosen for this project is a simplified version of C, called B-Minor. A description of the B-Minor syntax can be found in the references section of this page<sup>[3]</sup>. The compiler is broken into Scanner, Parser, Pretty-Printer, Typechecker, and Code Generation stages. Code for each stage is provided in the corresponding section.</Typography>
					<div className={commonStyle.MasterButtonContainer}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/master" text="Compiler"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={commonStyle.Section}>
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Scanner</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.bodyText} >The first stage of the compiler uses Flex Scanner Generator to group together characters from a plain text input into a sequence of tokens.  This is accomplished by simulating a finite automata through regular expression matching.</Typography>
					<div className={commonStyle.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/Scanner" text="Scanner Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/scanner.html "text="Scanner Description"/>
					</div>
				</Grid>

				<Grid item xs={12} className={commonStyle.Section}>
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Parser</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.bodyText}>The second stage of the compiler uses Bison Parser Generator to group together tokens of the Scanner into statements and expressions using a defined context free grammar.</Typography>
					<div className={commonStyle.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/Parser" text="Parser Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/parser.html "text="Parser Description"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={commonStyle.Section}>
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Pretty-Printer</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.bodyText}>The printer stage of the compiler uses the grammar rules of the parser to construct an abstract syntax tree (AST).  After it is constructed, the AST is traversed and the original B-minor input program is printed with consistent formatting.</Typography>
					<div className={commonStyle.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/PrettyPrinter" text="Printer Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/printer.html "text="Printer Description"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={commonStyle.Section}>
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Typechecker</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.bodyText}>Due to COVID-19, the University of Notre Dame’s Fall 2020 semester schedule had to be modified, and as a result, this stage was split into a name resolution and a type checking stage. The name resolution stage traverses the AST, tracking variable and function declarations, and verifies that each identifier is used within a legal context.  The type checker determines the type of each element of the AST and ensures that the operations performed on each of these elements are allowed according to the B-minor syntax specifications.</Typography>
					<div className={commonStyle.buttonGrid}>
						<GithubButton link="https://github.com/harrisjacob/Compilers/tree/master/typecheck" text="Typechecker Code"/>
						<NdButton link="https://www3.nd.edu/~dthain/courses/cse40243/fall2020/typecheck.html" text="Typechecker Description"/>
					</div>
				</Grid>
				
				<Grid item xs={12} className={commonStyle.Section}>
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>Code Generation</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.bodyText}>The final stage of the compiler is code generation. In this stage the B-minor code, having been type checked, is used to produce a 64-bit x86 assembly language program.  This program can be assembled, linked, and run.</Typography>
				</Grid>

				<Grid item xs={12} className={commonStyle.Section}>
					<a name="reference" />
					<Typography variant="h3" color="textSecondary" className={commonStyle.SubTitle}>References</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.References}>
						1. <a href="https://www3.nd.edu/~dthain/compilerbook/compilerbook.pdf#chapter.2">https://www3.nd.edu/~dthain/compilerbook/compilerbook.pdf#chapter.2</a>
					</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.References}>
						2. <a href="https://www3.nd.edu/~dthain/compilerbook/chapterA.pdf">https://www3.nd.edu/~dthain/compilerbook/chapterA.pdf</a>
					</Typography>
					<Typography variant="body1" color="textPrimary" className={commonStyle.References}>
						3. <a href="https://www3.nd.edu/~dthain/compilerbook/chapterB.pdf">https://www3.nd.edu/~dthain/compilerbook/chapterB.pdf</a>
					</Typography>
				</Grid>

			</Grid>
		</div>


	);
}