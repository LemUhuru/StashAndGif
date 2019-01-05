import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import searchStyles from '../styles/material/search';
import SearchButton from '../components/SearchButton';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
        }
    }

    handleChange = event => {
        const { value } =  event.target;
        this.setState({ searchQuery: value });
    }

    render() {
        const { classes: { textField } } = this.props;

        return (
            <form>
                <TextField
                    onChange={this.handleChange}
                    label="Search"
                    className={textField}
                    value={this.state.searchQuery}
                    variant="outlined"
                    margin="normal"
                />
                <SearchButton />
            </form>
        )
    }
};

export default withStyles(searchStyles)(Search);