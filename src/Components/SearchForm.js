import React, { Component } from 'react';
import SearchSvg from './SearchSvg';

class SearchForm extends Component{
    render(){
        return(
            <form className="search-form">
                <input type="search" name="search" placeholder="search" required/>
                <button type="submit" className="search-button">
                <SearchSvg />
                </button>
            </form>
        )
    }
}

export default SearchForm;