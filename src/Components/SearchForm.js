import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchSvg from './SearchSvg';

class SearchForm extends Component{
    state = {
        searchText:''
    }
    componentDidUpdate(prevProps) {
        const { action } = this.props.history
        if(action === "POP"){
            const { pathname } = this.props.location;
            if (pathname !== prevProps.location.pathname) {
                const queryParam = pathname.split('/')[2];
                this.props.onSearch(queryParam);
            }
        }
    }
    componentDidMount(){
        const { action } = this.props.history;
        if(action === "POP"){
            const { pathname } = this.props.location;
            const queryParam = pathname.split('/')[2];
            console.log(queryParam);
            if (typeof queryParam !== 'undefined') {
                this.props.onSearch(queryParam);
                // this.props.history.push(`/`);
            }
        }
    }
    handleChangeEvent = e =>{
        this.setState({ searchText: e.target.value });
    }
    handleSubmitEvent = e => {
        this.props.onSearch(this.state.searchText)
        e.currentTarget.reset();
        this.props.history.push(`/search/${this.state.searchText}`);
        e.preventDefault();
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

export default withRouter(SearchForm);