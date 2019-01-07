
import React from 'react';
import Divider from '@material-ui/core/Divider';
import DividerStyles from '../../styles/material/divider';
import { withStyles } from '@material-ui/core';

const SectionDivider = props => {
    return <Divider variant="inset" />;
};

export default withStyles(DividerStyles)(SectionDivider);