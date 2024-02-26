import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo, state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected}) => {
  // Defind vars from photo
  const { id } = photo;
  const { full: regularUrl } = photo.urls;
  const { username, profile } = photo.user;
  const { city, country } = photo.location;

  return(
    <div id={id} className="photo-list__item" >
      <PhotoFavButton updateToFavPhotoIds={updateToFavPhotoIds} photo={photo} state={state}/>
      {/* make sure img doesn't try to open itself or anything if modal is open */}
      <img onClick={() => {
        if (!state.isModalOpen) {
          onClosePhotoDetailsModal();
          setPhotoSelected(photo);
        }
      }} className="photo-list__image" src={regularUrl}/>
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