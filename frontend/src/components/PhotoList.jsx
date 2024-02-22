import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"

const PhotoList = ({state, setLikeHandler}) => {

  const listPhotoItems = (photoArr) => {
    return photoArr.map((photo) => {
      return (
        <li key={photo.id} className="photo-list">
          <PhotoListItem photo={photo} setLikeHandler={setLikeHandler} state={state}/>
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
