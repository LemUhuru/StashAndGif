import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import appBarStyles from '../../styles/material/appBarStyles';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const Header = ({ classes }) => {
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            {/* <MenuIcon /> */}
          </IconButton>
          <span className="brand-name">
            <Link to="/">
                Stash & Gif
            </Link>
          </span>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.signupButton}>
            <Button 
              variant="fab" 
              color="primary" 
              aria-label="Add" 
              className={classes.button}
            >
              <PersonIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default withStyles(appBarStyles)(Header);