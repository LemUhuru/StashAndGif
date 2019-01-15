import React from 'react';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Whatshot';
import buttonStyles from '../../styles/material/button';
import { withStyles } from '@material-ui/core/styles';


const SearchButton = ({ classes }) => {
    const { signupButton, button } = classes;
    
    return (
        <div className={signupButton}>
            <Fab
                color="primary" 
                aria-label="Add" 
                className={button}
                type="submit"
                >
                <SearchIcon />
            </Fab>
        </div>
    )
};

export default withStyles(buttonStyles)(SearchButton);