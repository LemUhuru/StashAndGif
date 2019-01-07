import React from 'react';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person'
import buttonStyles from '../../styles/material/button';
import { withStyles } from '@material-ui/core/styles';

const SearchButton = ({ classes }) => {
    const { signupButton, button } = classes;
    
    return (
        <div className={signupButton}>
            <Button
                variant="fab" 
                color="primary" 
                aria-label="Add" 
                className={button}
                type="submit"
                >
                <PersonIcon />
            </Button>
        </div>
    )
};

export default withStyles(buttonStyles)(SearchButton);