import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import LabelWrapper from './LabelWrapper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
  });

  
class ErrorLabel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    handleClose = (event, reason) => {
         this.setState({ open: false });
      };

    componentDidMount() {
        const { isError } = this.props;

        this.setState({ open: isError });
    };

    render() {
        const { classes, errorMsg } = this.props;
        const { open } = this.state;

        return (
            <div className="notification-label error-label">
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <LabelWrapper
                        variant="warning"
                        className={classes.margin}
                        message={errorMsg || 'Warning!'}
                        onClose={this.handleClose}
                    />
                </Snackbar>
            </div>
        );
    }};

export default withStyles(styles)(ErrorLabel);