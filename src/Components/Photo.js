import React from "react";

const Photo = (props) => {
  // Simple stateless component to render image. 
  return (
    <li>
        <img src={props.url} alt={props.title}/>
    </li>
  );
}

export default Photo;
