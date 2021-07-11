import React, { Component }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoadingSearchData: false,
      isLoadingCatsData: true,
      isLoadingDogsData: true,
      isLoadingCompsData: true,
      searchData: [],
      cats:[],
      dogs:[],
      computers:[]
    }
  }

  componentDidMount(){
    console.log(" Component is mounting ");
    this.search('cats');
    this.search('dogs');
    this.search('kevin hart');//random search
  }
  search = query => {
    //https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a1f7d4692b627cb749f1c68d9e3f4ba0&tags=cats&media=photos&extras=url_s&per_page=24&format=json&nojsoncallback=1
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(res => {
        switch (query) {
          case 'cats':
            this.setState({
              cats: res.data.data,
              isLoadingCatsData: false,
            });
            break;
          case 'dogs':
            this.setState({
              dogs: res.data.data,
              isLoadingDogsData: false,
            });
            break;
          case 'computers':
            this.setState({
              computersgs: res.data.data,
              isLoadingCompsData: false,
            });
            break;
          default:
            this.setState({
              searchData: res.data.data,
              isLoadingSearchData: false,
            });
            break;
        }
      })
      .catch()
  }
  render(){
    console.log(this.state);
  return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={ ()=> <div>Tip: use predefine search terms or use the search box to look for images</div> }  />
            <Route path="/Cats" render={ ()=> <div>cats</div> }  />
            <Route path="/Dogs" render={ ()=> <div>Dogs</div> }  />
            <Route path="/Computers" render={ ()=> <div>Computers</div> }  />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      )
  }
}

export default App;
