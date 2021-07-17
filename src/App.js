import React, { Component }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import urlBuilder from './utils';
import apiKey from './config';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import SearchResult from './Components/SearchResult';
import NotFound from './Components/NotFound';
import Loader from './Components/Loader';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoadingSearchData: true,
      isLoadingCatsData: true,
      isLoadingDogsData: true,
      isLoadingCompsData: true,
      searchData: {},
      cats:{},
      dogs:{},
      computers:{},
      isPageNotFound : false
    }
  }
  /**
   * loads default data based on nav fields
   */
  componentDidMount(){
    
    console.log(" Fetching Default Data ");
    this.search('cats');
    this.search('dogs');
    this.search('computers');//random search
  }
  /**
   * 
   * @param {boolean} bool
   * updates state depending on param.
   * this will control when Nav and SearchFom are rendered 
   */
  handlePageNotFound = bool => {
    this.setState({isPageNotFound: bool});
  }
  search = query => {
    //this will be used to construct the final URL. 
    //example: {base_url}?method=flickr.photos.search&api_key={api_key}&tags=cats&media=photos&extras=url_s&per_page=24&format=json&nojsoncallback=1
    const urlComponents = {
      base_url: 'https://www.flickr.com/services/rest/',
      query_params:{
        method :'flickr.photos.search',
        api_key: apiKey,
        tags:query,
        media:'photos',
        extras:'url_s',//TODO: may need handle is string is a comma-delimited list. p.s encodeURIComponent might be able to handle this.
        per_page:24,
        format:'json',
        nojsoncallback:1
      }
    }
    
    this.setState({isLoadingSearchData:true});
    // get final URL
    const url = urlBuilder(urlComponents);

    axios.get(url)
      .then(res => {
        // depending on which query param was passed.
        // update the approp.. state variables
        switch (query) {
          case 'cats':
            this.setState({
              cats: res.data,
              isLoadingCatsData: false,
            });
            break;
          case 'dogs':
            this.setState({
              dogs: res.data,
              isLoadingDogsData: false,
            });
            break;
          case 'computers':
            this.setState({
              computers: res.data,
              isLoadingCompsData: false,
            });
            break;
          default:
            this.setState({
              searchData: res.data,
              isLoadingSearchData: false,
            });
            break;
        }
      })
      .catch(error => {
        console.error('Failed to fetch data', error);
      })
  }
  render(){
    // deconfruct state variables 
    const { 
      cats, 
      dogs ,
      computers,
      searchData,
      isLoadingCatsData,
      isLoadingDogsData,
      isLoadingCompsData,
      isLoadingSearchData,
      isPageNotFound,
    } = this.state;
    // An easy way to group components that are controlled by a state value.
    const renderSearchAndNav = () =>{
      return(
        <>
          <SearchForm onSearch={this.search} />
          <Nav />
        </>
      )
  }
  return (
      <BrowserRouter>
        <div className="container">
          {/* if we are on the PageNotFound route, do not render Nav and Search Form*/}
          { !isPageNotFound? renderSearchAndNav() : null }
          <Switch>
            <Route exact path="/" render={()=> <div>Tip: use predefine search terms or use the search box to look for images</div> }/>
            <Route path="/Cats" render={()=> isLoadingCatsData ? <Loader /> : <SearchResult photos={cats.photos.photo} /> }/>
            <Route path="/Dogs" render={()=> isLoadingDogsData ? <Loader /> : <SearchResult photos={dogs.photos.photo} /> }/>
            <Route path="/Computers" render={()=> isLoadingCompsData ? <Loader /> : <SearchResult photos={computers.photos.photo} /> }  />
            <Route path="/search/:query" render={()=> isLoadingSearchData? <Loader /> : <SearchResult photos={searchData.photos.photo} /> }  />
            <Route render={()=> <NotFound display={this.handlePageNotFound}/> } />
          </Switch>
        </div>
      </BrowserRouter>
      )
  }
}

export default App;
