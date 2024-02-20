import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return(
    <div id={props.id} className="PhotoListItem">
      <img src={props.imageSource}/>
      <img src={props.profile}/>
      <p>
        {props.username}
      </p>
      <p>
        {props.city}, {props.country}
      </p>
    </div>
  )
};

export default PhotoListItem;


{/* <img class="profile__image" src="./profile-hex.png" /> */}