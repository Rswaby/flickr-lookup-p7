import React, { Component } from 'react';
import SearchSvg from './SearchSvg';

class SearchForm extends Component{
    state = {
        searchText:''
    }
    handleChangeEvent = e =>{
        this.setState({ searchText: e.target.value });
    }
    handleSubmitEvent = e => {
        e.preventDefault();
        console.log(this.state.searchText);
        this.props.onSearch(this.state.searchText)
        e.currentTarget.reset();
    }
    render(){
        return(
            <form className="search-form" onSubmit={this.handleSubmitEvent}>
                <input 
                    type="search" 
                    name="search"
                    onChange={this.handleChangeEvent}
                    placeholder="search"
                    required/>
                <button type="submit" className="search-button">
                <SearchSvg />
                </button>
            </form>
        )
    }
}

export default SearchForm;