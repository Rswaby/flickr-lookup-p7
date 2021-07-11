import React from "react";

const Photo = (props) => {
  return (
    <li>
        <img src={props.imgUrl} alt=""/>
    </li>
  );
}

export default Photo;
