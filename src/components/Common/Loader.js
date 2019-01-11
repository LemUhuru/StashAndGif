import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoaderStyles from '../../styles/material/loaderStyles';

const Loader = ({ classes }) => 
<div className="progress-loader"><CircularProgress className={classes.progress} /></div>


export default withStyles(LoaderStyles)(Loader);