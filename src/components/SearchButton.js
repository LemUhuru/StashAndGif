import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import buttonStyles from '../styles/material/button';

const SearchButton = ({ classes: { button } }) => {
    return (
        <div>
            <Button variant="contained" color="primary" className={button}>
                Primary
            </Button>
        </div>
    )
}

export default withStyles(buttonStyles)(SearchButton);