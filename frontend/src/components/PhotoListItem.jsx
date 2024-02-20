import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return(
    <div id={props.photo.id} className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile}/>
          <div className="photo-list__user-info">
            {props.photo.username}
            <br />
            <span className="photo-list__user-location">
              {props.photo.location.city}, {props.photo.location.country}
            </span>
          </div>
      </div>
    </div>
  )
};

export default PhotoListItem;