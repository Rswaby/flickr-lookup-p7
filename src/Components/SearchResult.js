import React from "react";
import Photo from './Photo';
const SearchResult = (props) => {
  let searchResults;
  // when data sent from app.js check if arr is empty 
  if(props.photos.length){
    searchResults = props.photos.map((photo,index) => <Photo key={index} url={photo.url_s} title={photo}/>);
  }else{
    // show nothing
    searchResults = <></>
  }
  return (
      <div className="photo-container">
        {/* Adjust message based on if list is empty or not */}
        <h2>{props.photos.length? 'Results':'No Results Found'}</h2>
        <ul>
          {searchResults}
        </ul>
      </div>
  );
}

export default SearchResult;
