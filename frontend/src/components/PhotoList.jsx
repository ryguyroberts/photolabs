import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({state, updateToFavPhotoIds, photos, onClosePhotoDetailsModal, setPhotoSelected}) => {

  const listPhotoItems = (photoArr) => {
    return photoArr.map((photo) => {
      return (
        <li key={photo.id} className="photo-list">
          <PhotoListItem photo={photo} updateToFavPhotoIds={updateToFavPhotoIds} state={state} onClosePhotoDetailsModal={onClosePhotoDetailsModal} setPhotoSelected={setPhotoSelected}/>
        </li>
      );
    })
  };

  return (
    <ul className="photo-list">
      {listPhotoItems(photos)}
    </ul>
  );
};

export default PhotoList;
