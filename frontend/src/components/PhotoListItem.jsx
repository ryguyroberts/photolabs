import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo, state, setLikeHandler}) => {
  /* Insert React */
  return(
    <div id={photo.id} className="photo-list__item">
      <PhotoFavButton setLikeHandler={setLikeHandler} photo={photo} state={state}/>
      <img className="photo-list__image" src={photo.urls.regular}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile}/>
          <div className="photo-list__user-info">
            {photo.user.username}
            <br />
            <span className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </span>
          </div>
      </div>
    </div>
  )
};

export default PhotoListItem;