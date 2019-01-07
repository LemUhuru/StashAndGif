import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import searchStyles from '../../styles/material/search';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const SearchField = ({ classes, handleFormChange }) => {
    const { search, searchIcon, inputRoot, inputInput } = classes;

    return (

        <div className={search}>
            <div className={searchIcon}><SearchIcon /></div>
            <InputBase
                onChange={handleFormChange}
                placeholder="Search gifs"
                classes={{
                    root: inputRoot,
                    input: inputInput,
                }}
            />
        </div>
)}


export default withStyles(searchStyles)(SearchField);