import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import appBarStyles from '../../styles/material/appBarStyles';
import SearchForm from '../Search/SearchFormContainer';
import Logo from './Logo';

const Header = ({ classes: { grow } }) => {
    return (
        <AppBar position="static">
          <Toolbar>
            <Logo />
            <div className={grow} />
            <SearchForm />
          </Toolbar>
        </AppBar>
    )
};

export default withStyles(appBarStyles)(Header);