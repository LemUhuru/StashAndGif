import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
      color: "#fcae00",
    },
  });

const Loader = ({ classes }) => {
    return <div className="progress-loader">
        <CircularProgress className={classes.progress} />
    </div>
};

export default withStyles(styles)(Loader);