import React, { Component }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import urlBuilder from './utils';
import api_key from './config';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import SearchResult from './Components/SearchResult';
import NotFound from './Components/NotFound';

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
      computers:{}
    }
  }
  componentDidMount(){
    console.log(" Component is mounting ");
    this.search('cats');
    this.search('dogs');
    this.search('computers');//random search
  }
  search = query => {
    const urlComponents = {
      base_url: 'https://www.flickr.com/services/rest/',
      query_params:{
        method :'flickr.photos.search',
        api_key,
        tags:query,
        media:'photos',
        extras:'url_s',//TODO: may need handle is string is a comma-delimited list. p.s encodeURIComponent might be able to handle this.
        per_page:24,
        format:'json',
        nojsoncallback:1
      }
    }
    const url = urlBuilder(urlComponents);
    axios.get(url)
      .then(res => {
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
  const { 
    cats, 
    dogs ,
    computers,
    searchData,
    isLoadingCatsData,
    isLoadingDogsData,
    isLoadingCompsData,
    isLoadingSearchData
  } = this.state
  return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.search} />
          <Nav />
          <Switch>
            <Route exact path="/" render={()=> <div>Tip: use predefine search terms or use the search box to look for images</div> }/>
            <Route path="/Cats" render={()=> isLoadingCatsData ? <p>Loading...</p> : <SearchResult photos={cats.photos.photo} /> }/>
            <Route path="/Dogs" render={()=> isLoadingDogsData ? <p>Loading...</p> : <SearchResult photos={dogs.photos.photo} /> }/>
            <Route path="/Computers" render={()=> isLoadingCompsData ?<p>Loading...</p>:<SearchResult photos={computers.photos.photo} /> }  />
            <Route path="/search/:query" render={()=> isLoadingSearchData?<p>Loading...</p>:<SearchResult photos={searchData.photos.photo} /> }  />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      )
  }
}

export default App;
