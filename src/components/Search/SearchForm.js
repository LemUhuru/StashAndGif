import React, { Component } from 'react';
import SearchButton from './SearchButton';
import SearchField from './SearchField';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
        };
    };


    handleFormChange = event => {
        event.preventDefault();
        const searchQuery = event.target.value;
        
        this.setState({ searchQuery });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        const { fetchGifs } = this.props;
        const { searchQuery } = this.state;

        fetchGifs(searchQuery);
    };


    render() {
        return (
            <form className="search-form" onSubmit={this.handleFormSubmit}>
                <SearchField handleFormChange={this.handleFormChange} />
                <SearchButton />
            </form>
        )
    };
};



export default SearchForm;