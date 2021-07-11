import React from "react";
import Photo from './Photo';
const SearchResult = (props) => {
  let searchResults;
  if(props.photos.length){
    searchResults = props.photos.map((photo,index) => <Photo key={index} url={photo.url_s} title={photo}/>);
  }else{
    searchResults = <div></div>
  }
  return (
      <div className="photo-container">
        <h2>{props.photos.length? 'Results':'No Results Found'}</h2>
        <ul>
          {searchResults}
        </ul>
      </div>
  );
}

export default SearchResult;
