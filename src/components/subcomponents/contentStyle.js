import { makeStyles } from '@material-ui/core/styles';
import theme from "../../theme.js"

const contentStyle = makeStyles((theme) => ({
    ProjectTitle: {
        marginTop: '2%',
        marginLeft: '2%',
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
    References:{
        fontFamily: 'Roboto, sansSerif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem',
        
        },
    },
}));


export default contentStyle;