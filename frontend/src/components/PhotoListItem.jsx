import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo, state, setLikeHandler, toggleModal={toggleModal}}) => {
  const { id, similar_photos } = photo;
  const { full: regularUrl } = photo.urls;
  const { username, profile } = photo.user;
  const { city, country } = photo.location;

  /* Insert React */
  return(
    <div id={id} className="photo-list__item" onClick={() => {toggleModal()}} >
      <PhotoFavButton setLikeHandler={setLikeHandler} photo={photo} state={state}/>
      <img className="photo-list__image" src={regularUrl}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
          <div className="photo-list__user-info">
            {username}
            <br />
            <span className="photo-list__user-location">
              {city}, {country}
            </span>
          </div>
      </div>
    </div>
  )
};

export default PhotoListItem;