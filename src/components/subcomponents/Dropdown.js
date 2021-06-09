import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:"center",
  },
  paper: {
    marginRight: theme.spacing(2), 
  },
  MenuBackground:{
    backgroundColor: 'rgba(11,12,16,0.95)',
  },
  NavText:{
    color: theme.palette.gray.main,
    fontFamily: 'Fjalla One, sansSerif',
  },
  NavButton:{
    color: theme.palette.gray.main,
    fontFamily: 'Fjalla One, sansSerif',
    //fontFamily: 'Raleway, sansSerif',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },


    "&:hover": {
      backgroundColor:theme.palette.secondary.light,
      // backgroundColor:theme.palette.secondary.main,
       color: theme.palette.gray.main,

    },
  }, 
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if(props.type === "CompSci"){
  	return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          align="center"
          className={classes.NavText}
        >
          Tools and Software Development
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
          {({ TransitionProps, placement }) => (
            <Grow className={classes.MenuBackground}
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/city-generator" component={Link}>Maya City Generator</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/compiler" component={Link}>Compiler</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/mini-shell" component={Link}>Mini Shell</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/sudoku-solver" component={Link}>Soduku Solver</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
 	 );
  }else{
  	return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          align="center"
          className={classes.NavText}
        >
          Modeling and Animation
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
          {({ TransitionProps, placement }) => (
            <Grow className={classes.MenuBackground}
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={classes.NavList} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/skyhook" component={Link}>Bioshock Infinite: Skyhook</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/pulse-rifle" component={Link}>Aliens: Pulse Rifle</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/luxo-animation" component={Link}>Luxo Jr Animation</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/duck-animation" component={Link}>Rubber Duck Animation</MenuItem>
                    <MenuItem className={classes.NavButton} onClick={handleClose} to="/corona-bottle" component={Link}>Corona Bottle</MenuItem>
                    
                  </MenuList>
                </ClickAwayListener>/
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
 	 );
  }

}