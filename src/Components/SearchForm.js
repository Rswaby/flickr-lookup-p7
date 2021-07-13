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
            const queryParam = pathname.split('/')[2];
            if (typeof queryParam !== 'undefined' && pathname !== prevProps.location.pathname) {
                this.props.onSearch(queryParam);
            }
        }
    }
    /**
     * handle reload on the same route. maybe not needed?  
     */
    componentDidMount(){
        const { action } = this.props.history;
        if(action === "POP"){
            const { pathname } = this.props.location;
            const queryParam = pathname.split('/')[2];
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
        const { searchText } = this.state;
        // if (searchText.trim().length > 0)
        this.props.onSearch(searchText)
        e.currentTarget.reset();
        // info: alternative approach to <Link to={`/search/${this.state.searchText}`}>
        // restricts user from searching empty text. unline <Link...>
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
                    {/* <Link to={`/search/${this.state.searchText}`}>     */}
                    <SearchSvg /> 
                    {/* </Link> */}
                </button>
            </form>
        )
    }
}

export default withRouter(SearchForm);